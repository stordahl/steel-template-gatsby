import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const IconsWrap = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	align-items: center;
	& > * {
		margin: .25rem;
	}
	& > *:hover {
		opacity: 80%;
	}
`;

library.add(fab);

const SocialLinks = () => {
	const { links } = useStaticQuery(graphql`
		query {
			links: allSanitySiteSettings {
				nodes {
					socialLinks {
						link
						name
						icon
						_key
					}
				}
			}
		}
	`);
	const linksArr = links.nodes[0].socialLinks;

	return (
		<IconsWrap>
			{linksArr.map((elem) => {
				return (
					<a href={elem.link} key={elem._key} aria-label={elem.name}>
						<FontAwesomeIcon icon={[ 'fab', elem.icon ]} size="lg" alt={elem.name} />
					</a>
				);
			})}
		</IconsWrap>
	);
}

export default SocialLinks