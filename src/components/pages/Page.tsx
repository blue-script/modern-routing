import React from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { PagesType } from '../../data/dataState'

type PropsType = {
	pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({ pages }) => {
	const params = useParams()
	console.log(params)

	const location = useLocation()
	// console.log(location)

	return (
		<div>
			{location.pathname === '/page/0' && <div>SECRET TEXT</div>}
			{pages[Number(params.id)] ? (
				<div>
					{pages[Number(params.id)].heading}
					{pages[Number(params.id)].about}
				</div>
			) : (
				//: <Error404/>
				<Navigate to={'/page/error'} />
			)}
		</div>
	)
}
