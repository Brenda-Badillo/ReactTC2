import User from "./components/User";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import Pokedex  from "./components/pokedex.json";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pkmn, setPkmn] = useState([]);
  const [backUpPkmn, setBackUpPkmn] = useState([]);

  useEffect(() => {
    try {
      let fetchPkmn = async function () {
        const response = await axios.get(
          Pokedex
        );
        setPkmn(response.data.data);
        setBackUpPkmn(response.data.data);
      };
      fetchPkmn();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const buscarPokemon = function (event) {
    let pokeArray = [...backUpPkmn];
    pokeArray = pokeArray.filter((Pokedex) => {
      let full_name = `${Pokedex.name} ${Pokedex.type}`;
      return (
        full_name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setPkmn(pokeArray);
  };

  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col xs={2} className="d-flex justify-content-end">
            <Form.Label>Busca un pokemon:</Form.Label>
          </Col>
          <Col xs={10}>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              onChange={buscarPokemon}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <div className="pokemon-container m-5">
            {Pokedex.map((pokemon) => {
              return <User key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
