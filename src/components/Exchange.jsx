import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getExchange } from '../apis/exchanges';
import styled from 'styled-components';

const Exchange = () => {
  let { exchangeId } = useParams()
  const { data, isLoading } = useQuery(['getExchange', exchangeId], () => getExchange(exchangeId));

  if (isLoading) return <p>Loading</p>
  return (
    <Container>
      <div>{data.name}</div>
      <div>{data.description}</div>
      <div>{data.name}</div>
      <div>{data.fiats.map((fiat) =>
        <div key={fiat.symbol}>
          <div>{fiat.name}</div>
          <div>{fiat.symbol}</div>
        </div>
      )}</div>
    </Container>
  )
}

export default Exchange

const Container = styled.div`


`