import React from 'react';
		import { Image, ScrollView,  Text, View} from 'react-native';
		import {style_01} from '../styles/style_01';

		const data = [
			{
			  name: "Aries",
			  dates: "21 de marzo - 19 de abril",
			  element: "Fuego",
			  traits: ["Energético", "Valiente", "Impulsivo", "Líder natural"],
			  ruler: "Marte",
			  compatibility: ["Leo", "Sagitario", "Libra"]
			},
			{
			  name: "Tauro",
			  dates: "20 de abril - 20 de mayo",
			  element: "Tierra",
			  traits: ["Paciente", "Confiable", "Persistente", "Amante del lujo"],
			  ruler: "Venus",
			  compatibility: ["Virgo", "Capricornio", "Escorpio"]
			},
			{
			  name: "Géminis",
			  dates: "21 de mayo - 20 de junio",
			  element: "Aire",
			  traits: ["Comunicativo", "Curioso", "Adaptable", "Versátil"],
			  ruler: "Mercurio",
			  compatibility: ["Libra", "Acuario", "Sagitario"]
			},
			{
			  name: "Cáncer",
			  dates: "21 de junio - 22 de julio",
			  element: "Agua",
			  traits: ["Emocional", "Protector", "Leal", "Sensible"],
			  ruler: "La Luna",
			  compatibility: ["Escorpio", "Piscis", "Capricornio"]
			},
			{
			  name: "Leo",
			  dates: "23 de julio - 22 de agosto",
			  element: "Fuego",
			  traits: ["Carismático", "Creativo", "Orgulloso", "Generoso"],
			  ruler: "El Sol",
			  compatibility: ["Aries", "Sagitario", "Acuario"]
			},
			{
			  name: "Virgo",
			  dates: "23 de agosto - 22 de septiembre",
			  element: "Tierra",
			  traits: ["Perfeccionista", "Analítico", "Práctico", "Detallista"],
			  ruler: "Mercurio",
			  compatibility: ["Tauro", "Capricornio", "Piscis"]
			},
			{
			  name: "Libra",
			  dates: "23 de septiembre - 22 de octubre",
			  element: "Aire",
			  traits: ["Diplomático", "Equilibrado", "Encantador", "Amante de la belleza"],
			  ruler: "Venus",
			  compatibility: ["Géminis", "Acuario", "Aries"]
			},
			{
			  name: "Escorpio",
			  dates: "23 de octubre - 21 de noviembre",
			  element: "Agua",
			  traits: ["Apasionado", "Intenso", "Intuitivo", "Reservado"],
			  ruler: "Plutón y Marte",
			  compatibility: ["Cáncer", "Piscis", "Tauro"]
			},
			{
			  name: "Sagitario",
			  dates: "22 de noviembre - 21 de diciembre",
			  element: "Fuego",
			  traits: ["Aventurero", "Optimista", "Filosófico", "Sincero"],
			  ruler: "Júpiter",
			  compatibility: ["Aries", "Leo", "Géminis"]
			},
			{
			  name: "Capricornio",
			  dates: "22 de diciembre - 19 de enero",
			  element: "Tierra",
			  traits: ["Ambicioso", "Disciplinado", "Responsable", "Práctico"],
			  ruler: "Saturno",
			  compatibility: ["Tauro", "Virgo", "Cáncer"]
			},
			{
			  name: "Acuario",
			  dates: "20 de enero - 18 de febrero",
			  element: "Aire",
			  traits: ["Independiente", "Innovador", "Idealista", "Intelectual"],
			  ruler: "Urano y Saturno",
			  compatibility: ["Géminis", "Libra", "Leo"]
			},
			{
			  name: "Piscis",
			  dates: "19 de febrero - 20 de marzo",
			  element: "Agua",
			  traits: ["Compasivo", "Soñador", "Creativo", "Empático"],
			  ruler: "Neptuno y Júpiter",
			  compatibility: ["Cáncer", "Escorpio", "Virgo"]
			}
		  ];
		  

		const Index = () => {
			return(
				<View>
					<View style={style_01.divHeader}>
						<Image source={require('../imgs/logos/logo_universidad.png')} />
					</View>

					<View style={style_01.divMain}>
						<Text style={style_01.h1}>signo zodiacal</Text>
						
						<ScrollView style={{marginTop:8}}>
							{data.map(item => <View style={style_01.tarjeta} key={item.name} >
								<Text>Name: {item.name}</Text>
								<Text>Fecha: {item.dates}</Text>
								<Text>elemento: {item.element}</Text>
								<Text>Rasgos: {item.traits.join(", ")}</Text>
								<Text>Astro: {item.ruler}</Text>
								<Text>compatibilidad: {item.compatibility.join(", ")}</Text>
							</View>)}
						</ScrollView>
					</View>

					<View style={style_01.divFooter}>
						<Text style={style_01.textFooter}>Carrera de Tecnologías de Información</Text>
						<Text style={style_01.textFooter}>Sede del Pacífico</Text>
					</View>
				</View>
			);
		}

		export default Index;
