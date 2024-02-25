import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
    // const { name, lastname = "Miy" , edad, cumple, altura} = props;
    const { name, lastname } = props;
    console.log(props)
    return (
        <Text>
            Hola {name} {lastname}
        </Text>
    )
}
//Esto sirve para setear los props por defecto, los props son propiedades que pasan por parametro
Saludar.defaultProps = {
    name: "Mora",
    lastname: "Lola",
}

Saludar.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string
}