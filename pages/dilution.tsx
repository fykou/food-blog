import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'

export default function CalcForm() {
	const initialState: {
		M1: number | undefined
		V1: number | undefined
		M2: number | undefined
		V2: number | undefined
	} = {
		M1: undefined,
		V1: undefined,
		M2: undefined,
		V2: undefined,
	}

	const [calcState, setCalcState] = useState(initialState)

	const calculate = () => {
		let result: any
		console.log(calcState)

		if (
			Object.entries(calcState).filter(([key, value]) => value === undefined)
				.length !== 1
		) {
		} else {
			for (const [key, value] of Object.entries(calcState)) {
				if (value == undefined) {
					switch (key) {
						case 'M1':
							result = (calcState.M2! * calcState.V2!) / calcState.V1!
							setCalcState({
								...calcState,
								M1: result,
							})
							break

						case 'V1':
							result = (calcState.M2! * calcState.V2!) / calcState.M1!
							setCalcState({
								...calcState,
								V1: result,
							})
							break

						case 'M2':
							result = (calcState.M1! * calcState.V1!) / calcState.V2!
							setCalcState({
								...calcState,
								M2: result,
							})
							break

						case 'V2':
							result = (calcState.M1! * calcState.V1!) / calcState.M2!
							setCalcState({
								...calcState,
								V2: result,
							})
							break
					}
				}
			}
		}
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		calculate()
	}

	return (
		<form
			className='flex flex-col items-center justify-center m-24'
			onSubmit={handleSubmit}
		>
			<h1 className='text-2xl mb-8'>Dilution calculator</h1>

			<div className='flex md:flex-row flex-col items-center justify-center'>
				<div className='flex'>
					<div className='flex flex-col items-center justify-center'>
						<label className='text-gray-700' htmlFor='M1'>
							M1
						</label>
						<input
							onChange={(event) => {
								if (event.target.value === '') {
									setCalcState({
										...calcState,
										[event.target.name]: undefined,
									})
								} else {
									setCalcState({
										...calcState,
										[event.target.name]: event.target.value,
									})
								}
							}}
							value={calcState.M1}
							name='M1'
							id='M1'
							type='number'
							className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
						/>
					</div>
					<span className='mt-6 text-3xl m-2'>x</span>
					<div className='flex flex-col items-center justify-center'>
						<label className='text-gray-700' htmlFor='V1'>
							V1
						</label>
						<input
							onChange={(event) => {
								if (event.target.value === '') {
									setCalcState({
										...calcState,
										[event.target.name]: undefined,
									})
								} else {
									setCalcState({
										...calcState,
										[event.target.name]: event.target.value,
									})
								}
							}}
							value={calcState.V1}
							name='V1'
							id='V1'
							type='number'
							className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
						/>
					</div>
				</div>
				<span className='mt-6 text-3xl m-2'>=</span>
				<div className='flex'>
					<div className='flex flex-col items-center justify-center'>
						<label className='text-gray-700' htmlFor='M2'>
							M2
						</label>
						<input
							onChange={(event) => {
								if (event.target.value === '') {
									setCalcState({
										...calcState,
										[event.target.name]: undefined,
									})
								} else {
									setCalcState({
										...calcState,
										[event.target.name]: event.target.value,
									})
								}
							}}
							value={calcState.M2}
							name='M2'
							id='M2'
							type='number'
							className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
						/>
					</div>
					<span className='mt-6 text-3xl m-2'>x</span>
					<div className='flex flex-col items-center justify-center'>
						<label className='text-gray-700' htmlFor='V2'>
							V2
						</label>
						<input
							onChange={(event) => {
								if (event.target.value === '') {
									setCalcState({
										...calcState,
										[event.target.name]: undefined,
									})
								} else {
									setCalcState({
										...calcState,
										[event.target.name]: event.target.value,
									})
								}
							}}
							value={calcState.V2}
							name='V2'
							id='V2'
							type='number'
							className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
						/>
					</div>
				</div>
			</div>
			<button className='px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
				Calculate
			</button>
		</form>
	)
}
