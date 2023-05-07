import { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

type Person = {
  Image: string;
  name: string;
  lastname: string;
  nationality: string;
  age: string;
};

function App() {
  const [person, setPerson] = useState<Person>({} as Person);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [nacionality, setNacionality] = useState("");
  const logoUrl =
    "https://www.kuepa.com/logo-kuepa-01-ce02783ec8555816498a749b2c879fb8.png";
  const [level, setLevel] = useState(1);
  const [subLevel, setSubLevel] = useState(1);

  const data = [
    {
      Image: "1.jpg",
      nombre: "Mariela",
      apellido: "Mirabal",
      nacionalidad: "Mexicana",
      edad: "Cinco años",
    },
    {
      Image: "2.jpg",
      nombre: "Martín",
      apellido: "Duarte",
      nacionalidad: "Tailandes",
      edad: "Diez años",
    },
    {
      Image: "3.jpg",
      nombre: "Hatsumi",
      apellido: "Díaz",
      nacionalidad: "Colombiana",
      edad: "Once años",
    },
    {
      Image: "4.jpg",
      nombre: "Hatsumi",
      apellido: "Díaz",
      nacionalidad: "Coreana",
      edad: "Ocho años",
    },
    {
      Image: "5.jpg",
      nombre: "Martín",
      apellido: "Santana",
      nacionalidad: "Japones",
      edad: "Siete años",
    },
    {
      Image: "6.jpg",
      nombre: "Juan",
      apellido: "Pérez",
      nacionalidad: "Mexicana",
      edad: "Veinticinco años",
    },
    {
      Image: "7.jpg",
      nombre: "Luna",
      apellido: "Gómez",
      nacionalidad: "Francesa",
      edad: "Trece años",
    },
    {
      Image: "8.jpg",
      nombre: "Simón",
      apellido: "Vega",
      nacionalidad: "Australiana",
      edad: "Nueve años",
    },
    {
      Image: "9.jpg",
      nombre: "Elena",
      apellido: "García",
      nacionalidad: "Alemana",
      edad: "Dieciocho años",
    },
    {
      Image: "10.jpg",
      nombre: "Rafael",
      apellido: "Castro",
      nacionalidad: "Rusa",
      edad: "Doce años",
    },
    {
      Image: "11.jpg",
      nombre: "Diana",
      apellido: "Ramírez",
      nacionalidad: "Canadiense",
      edad: "Dieciséis años",
    },
    {
      Image: "12.jpg",
      nombre: "Oscar",
      apellido: "López",
      nacionalidad: "Sudafricana",
      edad: "Veintidós años",
    },
    {
      Image: "13.jpg",
      nombre: "Natalia",
      apellido: "Fernández",
      nacionalidad: "Italiana",
      edad: "Quince años",
    },
    {
      Image: "14.jpg",
      nombre: "Felipe",
      apellido: "Hernández",
      nacionalidad: "Noruega",
      edad: "Veintiún años",
    },
    {
      Image: "15.jpg",
      nombre: "Verónica",
      apellido: "Cruz",
      nacionalidad: "Inglesa",
      edad: "Diecinueve años",
    },
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setPerson({
      Image: data[randomIndex].Image,
      name: data[randomIndex].nombre,
      lastname: data[randomIndex].apellido,
      nationality: data[randomIndex].nacionalidad,
      age: data[randomIndex].edad,
    });

    if (level < 2) {
      setLastname(person.lastname);
      setName(person.name);
    } else if (level < 3) {
      setLastname(person.name);
    }
  }, []);

  function handleOnDropName(e: React.DragEvent) {
    const name = e.dataTransfer.getData("value");
    setName(name);
  }
  function handleOnDropLastname(e: React.DragEvent) {
    const lastname = e.dataTransfer.getData("value");
    setLastname(lastname);
  }
  function handleOnDropAge(e: React.DragEvent) {
    const age = e.dataTransfer.getData("value");
    setAge(age);
  }
  function handleOnDropNacionality(e: React.DragEvent) {
    const age = e.dataTransfer.getData("value");
    setNacionality(age);
  }

  function handleOnDrag(e: React.DragEvent, person: any) {
    e.dataTransfer.setData("value", person.value) as unknown;
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Navbar.Brand className="mx-auto">
          <img
            src={logoUrl}
            width="180"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      </Navbar>
      <Container className="pt-3">
        <Row>
          <Col>
            <h4 className="centered">
              Completa los espacios de la tarjeta de identidad que faltan,
              arrastrando las palabras de la derecha hacia donde le corresponde
              en la imagen.
            </h4>
          </Col>
        </Row>
      </Container>
      <Container className="bg-light rounded border p-4 mt-4">
        <Row>
          <Col>
            <Row className="text-center bg-blue rounded p-4">
              <Col>TARJETA DE IDENTIDAD</Col>
            </Row>
            <Container className="bg-light rounded border p-4 mt-4">
              <Row className="d-flex align-items-center">
                <Col>
                  <Image src={person.Image} thumbnail />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <p>Nombre</p>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        onDrop={level > 1 ? handleOnDropName : undefined}
                        onDragOver={(e) => e.preventDefault()}
                        value={name}
                        readOnly
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Apellido</p>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        onDrop={level > 2 ? handleOnDropLastname : undefined}
                        onDragOver={(e) => e.preventDefault()}
                        value={lastname}
                        readOnly
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Edad</p>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        onDrop={handleOnDropAge}
                        onDragOver={(e) => e.preventDefault()}
                        value={age}
                        readOnly
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Nacionalidad</p>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        onDrop={handleOnDropNacionality}
                        onDragOver={(e) => e.preventDefault()}
                        value={nacionality}
                        readOnly
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              {Object.entries(person)
                .filter(([key]) => key !== "Image")
                .filter(([key]) =>
                  level < 2
                    ? key === "nationality" || key === "age"
                    : level < 3
                    ? key === "nationality" || key === "age" || key === "name"
                    : true
                )
                .map(([key, value]) => (
                  <li
                    key={key}
                    draggable
                    onDragStart={(e) => handleOnDrag(e, { type: key, value })}
                  >
                    {` ${person[key as keyof typeof person]}`}
                  </li>
                ))}
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Validar</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
