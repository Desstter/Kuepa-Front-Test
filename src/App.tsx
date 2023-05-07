import { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface Person {
  Image: string;
  name: string;
  lastname: string;
  nationality: string;
  age: string;
}

function App() {
  const [person, setPerson] = useState<Person>({} as Person);
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const logoUrl: string =
    "https://www.kuepa.com/logo-kuepa-01-ce02783ec8555816498a749b2c879fb8.png";
  const [level, setLevel] = useState<number>(1);
  const [subLevel, setSubLevel] = useState<number>(1);

  const data: Person[] = [
    {
      Image: "1.jpg",
      name: "Mariela",
      lastname: "Mirabal",
      nationality: "Mexicana",
      age: "Cinco años",
    },
    {
      Image: "2.jpg",
      name: "Santiago",
      lastname: "Duarte",
      nationality: "Tailandes",
      age: "Diez años",
    },
    {
      Image: "3.jpg",
      name: "Naomi",
      lastname: "Díaz",
      nationality: "Colombiana",
      age: "Once años",
    },
    {
      Image: "4.jpg",
      name: "Hatsumi",
      lastname: "Díaz",
      nationality: "Coreana",
      age: "Ocho años",
    },
    {
      Image: "5.jpg",
      name: "Martín",
      lastname: "Santana",
      nationality: "Coreano",
      age: "Siete años",
    },
    {
      Image: "6.jpg",
      name: "Luna",
      lastname: "Pérez",
      nationality: "Venezolana",
      age: "Cinco años",
    },
    {
      Image: "7.jpg",
      name: "Simon",
      lastname: "Gómez",
      nationality: "Frances",
      age: "Trece años",
    },
    {
      Image: "8.jpg",
      name: "David",
      lastname: "Vega",
      nationality: "Australiano",
      age: "Nueve años",
    },
    {
      Image: "9.jpg",
      name: "Elena",
      lastname: "García",
      nationality: "Alemana",
      age: "Ocho años",
    },
    {
      Image: "10.jpg",
      name: "Rafael",
      lastname: "Castro",
      nationality: "Ruso",
      age: "Doce años",
    },
    {
      Image: "11.jpg",
      name: "Itachi",
      lastname: "Ramírez",
      nationality: "Japones",
      age: "Seis años",
    },
    {
      Image: "12.jpg",
      name: "Natalia",
      lastname: "López",
      nationality: "Japonesa",
      age: "Siete años",
    },
    {
      Image: "13.jpg",
      name: "Belen",
      lastname: "Fernández",
      nationality: "Canadiense",
      age: "Doce años",
    },
    {
      Image: "14.jpg",
      name: "Felipe",
      lastname: "Hernández",
      nationality: "Peruano",
      age: "Nueve años",
    },
    {
      Image: "2.jpg",
      name: "Camilo",
      lastname: "Cruz",
      nationality: "Ingles",
      age: "Nueve años",
    },
  ];

  useEffect(() => {

    resetValues()

    const getRandomPerson = () => {
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    };

    const currentPerson = getRandomPerson();
    setPerson(currentPerson);

    if (level < 2) {
      setName(currentPerson.name);
      setLastname(currentPerson.lastname);
    } else if (level < 3) {
      setLastname(currentPerson.lastname);
    }
  }, [level, subLevel]);

  function resetValues() {
    setName("");
    setLastname("");
    setAge("");
    setNationality("");
  }

  function handleOnDropName(e: React.DragEvent) {
    const name: string = e.dataTransfer.getData("value");
    setName(name);
  }
  function handleOnDropLastname(e: React.DragEvent) {
    const lastname: string = e.dataTransfer.getData("value");
    setLastname(lastname);
  }
  function handleOnDropAge(e: React.DragEvent) {
    const age: string = e.dataTransfer.getData("value");
    setAge(age);
  }
  function handleOnDropNacionality(e: React.DragEvent) {
    const nationality: string = e.dataTransfer.getData("value");
    setNationality(nationality);
  }

  function handleOnDrag(e: React.DragEvent, person: any) {
    e.dataTransfer.setData("value", person.value) as unknown;
  }

  function handleValidate(params: any) {

    console.log(name);
    console.log(lastname);
    console.log(age);
    console.log(nationality);
    console.log(person.name);
    console.log(person.lastname);
    console.log(person.age);
    console.log(person.nationality);    
    if (
      name == person.name &&
      lastname == person.lastname &&
      age == person.age &&
      nationality == person.nationality
    ) {
      if (subLevel < 5) {
        setSubLevel(subLevel + 1);
      } else {
        setSubLevel(0);
        setLevel(level + 1);
      }
    } else {
      alert("Algo no es correcto");
    }
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
                        value={nationality}
                        readOnly
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            sm={5}
          >
            <Container className="text-center">
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
                  <Row>
                    <Col
                      key={key}
                      draggable
                      onDragStart={(e) => handleOnDrag(e, { type: key, value })}
                      className="m-2 p-3 bg-blue"
                    >
                      {` ${person[key as keyof typeof person]}`}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Col>
        </Row>
        <Row className="m-4 text-center">
          <Col>
            <Button className="p-4" onClick={handleValidate}>
              Validar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
