import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

import { Box, Container, Heading, Text, Link } from 'theme-ui';
const FAQ_TWO_DATA = {
  sectionTitle: {
    title: 'FAQ',
    text: '',
  },
  posts: [
    {
      status: false,
      title: '¿Que es BitHire?',
      text:
        "BitHire es una plataforma de trabajo freelance basada en la tecnología blockchain. Proporciona un espacio donde freelancers y clientes pueden conectarse y colaborar en proyectos relacionados con criptomonedas y tecnología blockchain.",
    },
    {
      status: false,
      title: '¿En qué criptomonedas puedo ganar en BitHire?',
      text:
        "En BitHire, puedes ganar en diversas criptomonedas populares como Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), y muchas más. La plataforma permite pagos seguros y transparentes en estas criptomonedas.",
    },
    {
      status: false,
      title: '¿Por qué usamos la tecnología Blockchain?',
      text:
        "Utilizamos la tecnología blockchain en BitHire debido a sus características de transparencia, seguridad y descentralización. La tecnología blockchain asegura que los pagos y las transacciones se realicen de manera segura, y permite un seguimiento transparente de los registros en la plataforma.",
    },
    {
      status: false,
      title:
        '¿Que tipos de profesionales encajan en BitHire?',
      text:
        "BitHire es ideal para profesionales con experiencia en criptomonedas, tecnología blockchain, desarrollo de software, diseño web, marketing digital y otros campos relacionados. También es adecuado para aquellos que deseen adquirir experiencia en el mundo de las criptomonedas y la tecnología blockchain.",
    },
    {
      status: false,
      title: '¿Cómo encuentro trabajo?',
      text:
        "Para encontrar trabajo en BitHire, puedes explorar las listas de proyectos disponibles en la plataforma. Puedes filtrar los proyectos por categoría, habilidades requeridas, ubicación y otras preferencias. Una vez que encuentres un proyecto que te interese, puedes postularte y comunicarte con el cliente para discutir los detalles.",
    },
    {
        status: false,
        title: '¿Cómo puedo contratar talento?',
        text:
        `
        En BitHire, puedes contratar talento siguiendo estos pasos:
        a) Publica un proyecto detallado, especificando los requisitos y habilidades necesarias.
        b) Recibe propuestas de freelancers interesados y revisa sus perfiles y calificaciones.
        c) Selecciona al freelancer adecuado para tu proyecto y establece los términos y condiciones.
        d) Colabora con el freelancer a través de la plataforma BitHire y realiza pagos seguros utilizando criptomonedas.
        
        Recuerda que BitHire ofrece una plataforma segura y confiable para conectar freelancers y clientes en el campo de las criptomonedas y la tecnología blockchain.
        `,
      },
  ],
  button: {
    link: '#',
    label: '¿Tienes otra pregunta? Puedes contactarnos!',
  },
};
const FaqItem = ({ title, text, status, index }) => {
  const [active, setActive] = useState(status);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Box
      sx={styles.item}
      className={`${active === true ? 'active' : ' '}`}
      onClick={handleClick}
    >
      <Heading as="h3">
        <span>0{index + 1}.</span>
        {title}
      </Heading>
      {active === false ? <Text as="p">{text.slice(0, 65)} ...</Text> : null}
      {active === true ? <Text as="p">{text}</Text> : null}
      <Box sx={styles.icon}>
        {active === false ? <IoIosAdd /> : null}
        {active === true ? <IoIosRemove /> : null}
      </Box>
    </Box>
  );
};
const FaqTwo = () => {
  const { sectionTitle, posts, button } = FAQ_TWO_DATA;
  return (
    <Box sx={styles.section}>
      <Container>
        <Box sx={styles.sectionTitle}>
          <Text as="p">{sectionTitle.text}</Text>
          <Heading as="h3">{sectionTitle.title}</Heading>
        </Box>
        <Box>
          {posts.map(({ title, text, status }, index) => (
            <FaqItem
              key={`faq-key-${index}`}
              title={title}
              text={text}
              index={index}
              status={status}
            />
          ))}
        </Box>
        <Box sx={styles.buttonWrap}>
          <Link href={button.link}>{button.label}</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqTwo;

const faqAnim = keyframes`
    from {
        opacity: 0;
        transform: translateY(20%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

const styles = {
  section: {
    pb: ['70px', null, null, null, '100px', null, '150px'],
    pt: ['40px', null, null, null, '75px'],
  },
  sectionTitle: {
    mb: ['0', null, null, null, '40px'],
    textAlign: 'center',
    p: {
      color: '#00A99D',
      fontSize: '36px',
    },
    h3: {
      color: '#0F2137',
      letterSpacing: '-0.5px',
      fontSize: '54px',
      fontWeight: 500,
    },
  },
  item: {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: '1px solid #E5E5E5',
    px: ['15px', '40px'],
    py: '40px',
    cursor: 'pointer',
    transition: 'all 500ms ease',
    position: 'relative',
    '&.active': {
      borderColor: '#0F2137',
    },
    h3: {
      flex: ['0 0 100%', null, null, null, '0 0 50%'],
      color: '#0F2137',
      fontSize: ['16px', null, null, '18px', null, '25px'],
      fontWeight: 500,
      letterSpacing: '-0.5px',
      position: 'relative',
      pl: ['0', null, null, null, '35px'],
      lineHeight: 1.67,
      whiteSpace: ['normal', null, null, null, 'pre-line'],
      mb: ['10px', null, null, null, '0'],
      span: {
        position: ['relative', null, null, null, 'absolute'],
        top: 0,
        left: 0,
        mr: ['10px', null, null, null, '0'],
      },
    },
    p: {
      flex: ['0 0 100%', null, null, null, '0 0 50%'],
      color: '#343D48',
      fontSize: ['15px', null, null, '20px'],
      lineHeight: [1.87, 2],
      animation: `${faqAnim} .8s linear`,
    },
  },
  buttonWrap: {
    textAlign: 'center',
    mt: '40px',
    a: {
      display: 'inline-flex',
      backgroundColor: '#ECF2F7',
      borderRadius: '5px',
      color: '#738295',
      fontSize: '20px',
      fontWeight: 700,
      padding: '10px 22px',
      transition: 'all 500ms ease',
      '&:hover': {
        backgroundColor: '#4F96FF',
        color: '#fff',
      },
    },
  },
  icon: {
    position: 'absolute',
    top: '45px',
    right: 0,
    svg: {
      fontSize: '24px',
      color: '#B1B8C0',
    },
  },
};