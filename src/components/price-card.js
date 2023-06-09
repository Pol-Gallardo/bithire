import { Box, Card, Text, Flex, Heading, Button } from 'theme-ui';
import React from 'react';
import List from './list';

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    points,
  },
}) {
  return (
    <Card className={header ? 'active' : null} sx={styles.pricingBox}>
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Flex sx={styles.pricingHeader}>
          <Box>
            <Heading className="package__name" sx={styles.heading}>
              {name}
            </Heading>
            <Text
              as="p"
              sx={{
                opacity: header ? 1 : 0.7,
                color: header ? 'text' : 'white',
                fontSize: [1, 2],
                lineHeight: 1.3,
              }}
            >
              {description}
            </Text>
          </Box>
          {header && (
            <Text className="package__price" sx={styles.price}>
              <span>Starting from</span>
              <div className="price">
                {priceWithUnit}
                <sub>mo</sub>
              </div>
            </Text>
          )}
        </Flex>
        <List items={points} childStyle={styles.listItem} />
        <Box
          sx={{
            textAlign: 'center',
            mt: ['40px', null, null, null, null, '70px'],
          }}
        >
          <Button
            variant={header ? 'primary' : 'whiteButton'}
            aria-label={buttonText}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    flex: [
      '0 1 100%',
      null,
      null,
      '0 1 50%',
      '0 1 45%',
      '0 1 40%',
      '0 1 38.5%',
    ],
    background: '#0120F4',
    borderRadius: 20,
    ml: [0, null, null, 5],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: [
      '50px 15px 50px',
      null,
      '62px 25px 50px 25px',
      null,
      '62px 70px 50px 40px',
    ],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px',
    },
    '&:first-of-type': {
      ml: 0,
      mt: 0,
    },
  },

  heading: {
    fontWeight: 'bold',
    fontSize: [4, null, null, null, 6],
    lineHeight: '23px',
    color: '#ffffff',
    marginBottom: [1, null, '12px'],
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['35px', null, null, null, null, '50px'],
  },
  listItem: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [2, null, null, null, 3],
    lineHeight: [1.7, null, 1.65],
    marginBottom: [3, '22px'],
    alignItems: 'flex-start',
    color: 'white',
    pr: [2, null, null, null, 0, 6],
    button: {
        color: 'white',
      },
  },
};
