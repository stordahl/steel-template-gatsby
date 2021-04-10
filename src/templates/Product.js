import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { createString, isDigital } from '../utils/utils'
import Layout from '../components/layout'
import { siteMetadata } from '../../gatsby-config'
import steel from '../steel-config'

const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
	align-items: center;
	width: max-content;
	margin: 0 auto;
	font-family: var(--bodyFont);
	& > div {
		margin: 1rem;
		width: 400px;
		max-width: 80vw;
		margin: 1rem;
	}
	& > div > label {
		margin-left: .5rem;
	}
	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;
const Heading = styled.h1`
	font-weight: 900;
	font-size: 1.5em;
	margin: 20px 0;
	font-family: var(--subheadingFont);
	font-size: var(--subheadingSize);
	color: var(--subheadingColor);
`;
const ImgStyled = styled(GatsbyImage)`
  width: 400px;
  height: 400px;
  max-width: 80vw;
  @media screen and (min-width: 768px){
    width: 100%;
  }
`;
const Price = styled.p`
	margin-bottom: 10px;
	padding: 10px;
	font-weight: 700;
	font-family: var(--bodyFont);
	color: var(--bodyColor);
	font-size: 2rem;
`;
const Description = styled.p`
	padding: 7px;
	font-family: var(--bodyFont);
	font-size: var(--bodySize);
	color: var(--bodyColor);
	&:last-of-type {
		margin-bottom: 25px;
	}
`;
const Dropdown = styled.select`
	position: relative;
	display: block;
	padding: 10px;
	margin: 10px 0;
	font-weight: 700;
	font-family: var(--bodyFont);
	background: var(--bg);
	border: var(--border);
	border-radius: var(--borderRadius);
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background: transparent;
	background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
	background-repeat: no-repeat;
	background-position-x: 100%;
	background-position-y: 5px;
	color: var(--fontColor);
	&:hover {
		cursor: pointer;
		transform: translateY(-2px);
	}
	&:hover > option {
		color: var(--fontColor);
	}
`;
const InputWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > * {
		width: 150px;
		margin: .5rem;
	}
`;
const DropdownOption = styled.option`
	padding: 20px;
	background: var(--bg);
	color: var(--bodyColor);
	font-family: var(--bodyFont);
	font-size: var(--bodySize);
	font-weight: 700;
	border: none;
	outline: none;
`;
const BuyButton = styled.button`
	&:hover {
		transform: rotate(2deg);
	}
`;

const Product = ({ data: { item }}) => {
	const variants = item.variants
  const options = variants.map(e => e.title)

  const [selected, setSelected] = useState(variants[0])

  const imageData = getGatsbyImageData(variants[0].images[0].asset.id, {maxWidth: 600}, steel.sanity)

	const digitalVersion = variants.findIndex(isDigital)

  return (
		<>
			<Helmet 
				title={steel.title}
				htmlAttributes={{
					lang: 'en',
				}}
			/>
			<Layout>
				<ProductGrid>
					<div>
						<Heading>{item.title}</Heading>
						<ImgStyled image={imageData} alt={item.title} key={item.id}/>
					</div>
					<div>
						<Price>${selected.price}</Price>
						{item.body.en.map(({children}) => <Description key={children._key}>{children[0].text}</Description>)}
						<InputWrap>
							{item.variants.length > 1 && 
								<Dropdown
									aria-label={item.variant_type}
									id={item.title}
									onChange={(e) => setSelected(variants[options.indexOf(e.target.value)])}
									value={selected.title}
								>
									{item.variants.map((option) => (
										<DropdownOption key={option._key}>{option.title}</DropdownOption>
									))}
								</Dropdown>
							}
							<BuyButton
								className="snipcart-add-item"
								data-item-id={item.id}
								data-item-price={selected.price}
								data-item-name={item.title}
								data-item-description={item.blurb.en}
								data-item-image={variants[0].images[0].asset.url}
								data-item-url={`${siteMetadata.siteUrl}/${item.slug.current}`}
								data-item-custom1-name={variants.length > 1 ? item.variant_type : ''}
								data-item-custom1-options={variants.length > 1 ? createString(variants, selected) : ''}
								data-item-custom1-value={selected.title}
								data-item-file-guid={digitalVersion !== -1 ? variants[digitalVersion].guid : ''}
								data-item-weight={digitalVersion === -1 ? variants[item.variants.indexOf(selected)].grams : 0}
							>
								Add to cart
							</BuyButton>
						</InputWrap>
					</div>
				</ProductGrid>
			</Layout>
		</>
  )
}

export default Product

export const pageQuery = graphql`
	query ItemBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		item: sanityProduct(slug: { current: { eq: $slug } }) {
			id
			title
			slug {
				current
			}
			blurb {
				en
			}
			body {
				en {
					_key
					children {
						_key
						text
					}
				}
			}
			variants {
				_key
				title
				grams
				price
				sku
				taxable
				digital
				guid
				images {
					asset {
						url
						assetId
						id
						description
					}
				}
			}
			variant_type
		}
	}
`;
