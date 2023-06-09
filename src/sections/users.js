/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = [
    {
        name: 'Talentos',
        description: '',
        buttonText: '',
        points: [
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Usamos tecnología blockchain para garantizar la seguridad total de tus pagos',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text:
            'Capacidad para encontrar trabajos según tus necesidades temporales',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Retira tus fondos sin comisiones adicionales',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Consigue con nosotros una buena reputación de cara a las empresas',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Total libertad a la hora de escoger en que moneda quieres recibir el pago',
            isAvailable: true,
        },
    ],
    },
    {
        name: 'Empresas',
        description: '',
        priceWithUnit: '$29.99/',
        buttonText: '',
        points: [
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Encuentre los mejores talentos para su empresa en menos de 48 horas.',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text:
            'Tenga total transparencia y control sobre sus contrataciones.',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Antes de tomar una decisión final, podrá revisar el historial laboral, los testimonios de los clientes, los proyectos de muestra y más.',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Haga que su presupuesto rinda mucho más',
            isAvailable: true,
        },
        {
            icon: <IoIosCheckmarkCircle />,
            text: 'Los consultores y agencias cobran hasta un 70% de recargo. En BitHire, solo paga el 10%.',
            isAvailable: true,
        },
    ],
    },
];
export default function Package() {
    return (
        <section id="pricing" sx={styles.pricing}>
        <Container>
            <SectionHeader
            title="Caminando hacia un futuro más facil"
            slogan=""
            isWhite={false}
        />
        <Flex
            sx={{
                justifyContent: 'center',
                flexWrap: ['wrap', null, null, 'nowrap'],
            }}
        >
            {packages.map((packageData) => (
                <PriceCard data={packageData} key={packageData.name} />
            ))}
        </Flex>
        </Container>
    </section>
    );
}

const styles = {
    pricing: {
        backgroundColor: 'white',
        pt: [60],
        pb: [100, 100, 100, 80]
    },
}; 