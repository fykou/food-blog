import React from 'react'
import PageLayout from '../components/PageLayout'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { MyApolloClient } from '../services/graphql'
import { GET_ABOUT } from '../services/graphql/queries'
import ImageComp from '../components/ImageComp'
import { ApolloError } from '@apollo/client'
import ErrorComponent from '../components/ErrorComponent'
import { AboutPageEntityResponse } from '../services/graphql-types'

type Props = {
    aboutResponse: AboutResponse
}

type AboutResponse = {
    aboutData: AboutPageEntityResponse
    error: ApolloError | null
}

const about: React.FC<Props> = (props: Props) => {
    if (props.aboutResponse.error != null) return <ErrorComponent error={props.aboutResponse.error} />
    return (
        <PageLayout>
            <Head>
                <title>About | Emilys Kitchen</title>
                <meta name='description' content='About' key='description' />
                <meta property='og:description' content='About' key='ogDescription' />
            </Head>
            <section className='w-full flex flex-col justify-center items-center text-m_text_dark font-serif'>
                <div className='aspect-[2/1] sm:aspect-[4/1] w-full lg:w-3/4 max-w-screen-tablet'>
                    <ImageComp
                        imageData={props.aboutResponse.aboutData.data?.attributes?.coverImage?.data?.attributes}
                        format={{ medium: true }}
                        placeholder={
                            props.aboutResponse.aboutData.data?.attributes?.coverImage?.data?.attributes ? false : true
                        }
                    />
                </div>

                <div className='flex flex-col justify-between gap-4 w-full px-2 max-w-screen-laptop sm:flex-row mt-10'>
                    {/* Profile */}
                    <div className='basis-0 grow flex justify-center sm:justify-end text-center'>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <div className='w-20 h-20 items-center justify-center'>
                                <ImageComp
                                    imageData={
                                        props.aboutResponse.aboutData.data?.attributes?.profilePicture?.data?.attributes
                                    }
                                    format={{ medium: true }}
                                    className='rounded-full'
                                    placeholder={
                                        props.aboutResponse.aboutData.data?.attributes?.profilePicture?.data?.attributes
                                            ? false
                                            : true
                                    }
                                />
                            </div>
                            <h2 className='font-medium break-words'>
                                {props.aboutResponse?.aboutData.data?.attributes?.profileName ?? 'myName'}
                            </h2>
                            <div className='w-12 h-0.5 bg-indigo-500 rounded' />
                            <p className='whitespace-pre-line w-full overflow-hidden'>
                                {props.aboutResponse?.aboutData.data?.attributes?.profileDescription ?? 'aboutMe'}
                            </p>
                        </div>
                    </div>
                    {/* Desc */}
                    <div className='basis-0 grow sm:border-l sm:p-4 border-gray-200 sm:border-t-0 border-t text-center sm:text-left'>
                        <p className='whitespace-pre-line w-full overflow-hidden mt-2 sm:mt-0'>
                            {props.aboutResponse?.aboutData.data?.attributes?.description ?? 'more'}
                        </p>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default about

export const getServerSideProps: GetServerSideProps = async () => {
    const client = MyApolloClient()
    let error: ApolloError | null = null
    const aboutResponse = await client
        .query({
            query: GET_ABOUT,
        })
        .catch((err) => {
            console.error(err)
            error = JSON.parse(JSON.stringify(err))
        })

    const aboutData: AboutPageEntityResponse = aboutResponse?.data.aboutPage

    return {
        props: {
            aboutResponse: {
                aboutData,
                error,
            },
        },
    }
}
