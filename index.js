/**
 * Get the width and height of an element to mimic
 * the `background-size: cover` CSS property
 * @param  {Object} elementSizes   An object containing the `width` and `height` of the element
 * @param  {Object} containerSizes An object containing the `width` and `height` of the container
 * @return {Object}                An object containing the newly computed `width` and `height` of the element
 */
export default function(elementSizes, containerSizes) {
	const elementRatio = elementSizes.width / elementSizes.height
	const containerRatio = containerSizes.width / containerSizes.height

	let width, height

	if (containerRatio > elementRatio) {
		width = containerSizes.width
		height = containerSizes.width / elementRatio
	} else {
		width = containerSizes.height * elementRatio
		height = containerSizes.height
	}

	return { width, height }
}