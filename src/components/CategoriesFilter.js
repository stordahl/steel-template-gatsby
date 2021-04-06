import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const CategoryStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    background: var(--bg);
    box-shadow: var(--shadow);
    border-radius: var(--borderRadius); 
    padding: 10px;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.12);
  }
`

// TODO: comment out functions
const countProdsInCats = (prods) => {
    const counts = prods
    .map(prod => prod.categories)
    .flat()
    .reduce((acc, category) => {
      const existingCategory = acc[category.id]
      if (existingCategory) {
        existingCategory.count += 1
      } else {
        acc[category.id] = {
          id: category.id,
          title: category.title,
          slug: category.slug.current,
          count: 1
        }
      }
      return acc
    }, {})
    const sortedCategories = Object.values(counts).sort(
      (a,b) => b.count - a.count
    )
    return sortedCategories
}

export default function CategoriesFilter() {
  const { products } = useStaticQuery(graphql`
    query {
      products: allSanityProduct {
        nodes {
          categories {
            title
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  
  const categoryCount = countProdsInCats(products.nodes)
  const prodCount = products.nodes.length

  return (
    <CategoryStyles>
      <Link to={`/`}>
        <span className="name">All</span>
        <span className="count">{ prodCount }</span>
      </Link>
      {
        categoryCount.map(category => 
          <Link to={`/${category.slug}`} key={category.id}>
            <span className="name">{ category.title }</span>
            <span className="count">{ category.count }</span>
          </Link>
        )
      }
    </CategoryStyles>
  )
}
