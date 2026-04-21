import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";// conecta de forma global 
import { CardPeople } from "../components/CardPeople.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import { CardVehicles } from "../components/CardVehicles.jsx";
import React, { useEffect } from "react"

export const Home = () => {
	//que traer desde el archivo useGlobalReducer.jsx
	const { store, dispatch } = useGlobalReducer()
	//cambia lo que haya en el store

	async function cartaPersonajes() {
		try {
			const response = await fetch("https://www.swapi.tech/api/people/");
			if (!response.ok) {
				throw new Error(`Error al obtener peronajes: ${response.statusText}`)
			}
			const data = await response.json()
			const personajesBasicos = data.results;
			dispatch({
				type: "set_personajes",
				payload: { people: personajesBasicos }
			})

		} catch (error) {
			console.error("Error en cargar personajes:", error)
		}
	}

	//llamar a la funcion 
	useEffect(() => {
		if (store.people.length === 0) {
			cartaPersonajes()
		}
	}, [])



	async function cartaPlanetas() {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets/");
			if (!response.ok) {
				throw new Error(`Error al obtener planeta: ${response.statusText}`)
			}
			const data = await response.json()
			const planetasBasico = data.results;
			dispatch({
				type: "set_planets",
				payload: { planets: planetasBasico }
			})

		} catch (error) {
			console.error("Error en cargar planetas:", error)
		}
	}
useEffect(() => {
	if (store.planets.length === 0) {
		cartaPlanetas()
	}
}, [])


async function cartaVehiculos() {
	try {
		const response = await fetch("https://www.swapi.tech/api/vehicles/");
		if (!response.ok) {
			throw new Error(`Error al obtener vehiculos: ${response.statusText}`)
		}
		const data = await response.json()
		const vehiculosBasico = data.results;
		dispatch({
			type: "set_vehicles",
			payload: { vehicles: vehiculosBasico }
		})

	} catch (error) {
		console.error("Error en cargar planetas:", error)
	}
}
useEffect(() => {
	if (store.vehicles.length === 0) {
		cartaVehiculos()
	}
}, [])

return (
	<div className="container mt-5">
		<h3>People</h3>
		<div className="d-flex gap-3 overflow-auto align-items-stretch mb-5">
			{/* //mapear carta */}
			{store.people.map((people) => (
				<CardPeople key={people.uid} people={people} />
			))}
		</div>

		<h3>Planets</h3>
		<div className="d-flex gap-3 overflow-auto align-items-stretch mb-5">
			{/* //mapear carta */}
			{store.planets.map((planets) => (
				<CardPlanets key={planets.uid} planets={planets} />
			))}
		</div>

		<h3>Vehicles</h3>
		<div className="d-flex gap-3 overflow-auto align-items-stretch mb-5">
			{/* //mapear  carta */}
			{store.vehicles.map((vehicles) => (
				<CardVehicles key={vehicles.uid} vehicles={vehicles} />
			))}
		</div>

	</div>

);
}; 