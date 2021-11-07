import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='/ About' />
    <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article >
          <div className='title'>
            <h2>our story</h2>
          </div>
          <div className='underline'></div>
          <p>Ex excepteur pariatur non aute deserunt culpa cupidatat occaecat officia consectetur aute nisi sint. Sint qui ullamco ea ut laboris reprehenderit aute excepteur aliqua fugiat. Ullamco culpa aute minim laboris. Tempor consectetur commodo occaecat aliquip. Adipisicing excepteur consequat ut pariatur velit cillum. Cupidatat eiusmod commodo in ex esse ea velit nostrud aute veniam amet commodo.
In ut pariatur incididunt culpa adipisicing culpa Lorem laboris ad qui pariatur sunt. Cupidatat do aliqua quis ullamco sit nisi nostrud dolor tempor voluptate cupidatat ad adipisicing consectetur. Tempor est anim do velit ea laborum nostrud occaecat. Anim reprehenderit reprehenderit fugiat nulla pariatur dolore culpa elit aliqua laborum proident elit proident. Nisi anim deserunt elit proident nisi consequat sint minim excepteur fugiat commodo. Sit cillum reprehenderit cillum commodo nulla cillum duis consequat labore magna qui amet laboris fugiat.</p>
        </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
