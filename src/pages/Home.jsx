import { useQuery } from '@tanstack/react-query'
import { getExchanges } from '../apis/exchanges'
import Card from '../components/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data } = useQuery(['getExchanges'], getExchanges);
  console.log(data)
  return (
    <Container>
      {
        data &&
        data.map((exchange) =>
          <Link key={exchange.id} to={`exchange/${exchange.id}`}>
            <Card name={exchange.name}></Card>
          </Link>
        )
      }
    </Container>
  )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;

    a{
      color: black;
    }
`