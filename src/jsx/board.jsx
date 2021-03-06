import React, { Component } from 'react'

import { connect } from 'react-redux'

import Square from '../jsx/square.jsx'

import { move_down } from '../actions/'
import { shapes } from '../utilities/'



// Represents a 10 x 18 grid of grid squares
class Board extends Component {
	constructor(props) {
		super(props)
		this.last_update_time = 0
		this.progress_time = 0
	}

	// this function is built in and is called when mounted
	componentDidMount() {
		window.requestAnimationFrame(this.update.bind(this))
	}

	// generates an array of 18 rows, each containing 10 Squares.
	make_grid() {
		// collect properties mapped to props from state.
		const { grid, shape, rotation, x, y } = this.props

		// get the block which is the current shape the player is controlling
		const block = shapes[shape][rotation]
		const block_color = shape

		// map rows
		return grid.map((row_array, row) => {

			// map columns
			return row_array.map((square, col) => {

				// Find the block x and y on the shape grid
				// By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
				const block_x = col - x
				const block_y = row - y
				let color = square

				// Map current falling block to grid.
				// For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
				if (block_x >= 0 && block_x < block.length && block_y >= 0 && block_y < block.length) {
					color = block[block_y][block_x] === 0 ? color : block_color
				}

				// Generate a unique key for every block
				const k = row * grid[0].length + col;

				// Generate a grid square
				return <Square
								key={k}
								square={square}
								color={color}>{square}
							</Square>
			})
		})
	}

	// Handle game updates
	update(time) {
		// If the game is is running we want to request a callback at the next animation frame.
		window.requestAnimationFrame(this.update.bind(this))
		if (!this.props.is_running) {
			return
		}

		// If last_update_time not been set, set it to the current time.
		if (!this.last_update_time) {
			this.last_update_time = time
		}

		// Calculate delta time and progress time
		const delta_time = time - this.last_update_time
		this.progress_time += delta_time

		// If the progress time is greater than speed move the block down
		if (this.progress_time > this.props.speed) {
			this.props.move_down()
			this.progress_time = 0
		}

		// set the last update time.
		this.last_update_time = time
	}

	// The components generated in make_grid are rendered in div.board
	render () {
		return (
			<div className='board'>
				{this.make_grid()}
			</div>
		)
	}
}

const map_state_to_props = (state) => {
	return {
		grid: state.game.grid,
		shape: state.game.shape,
		rotation: state.game.rotation,
		x: state.game.x,
		y: state.game.y,
		speed: state.game.speed,
		is_running: state.game.is_running
	}
}

const map_dispatch_to_props = () => {
	return {
		move_down
	}
}

// Connect the component
export default connect(map_state_to_props, map_dispatch_to_props())(Board)
