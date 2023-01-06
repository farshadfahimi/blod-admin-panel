<script setup lang="ts">
import type { MapClick } from '../interface/map'
import { ref, reactive, onMounted } from 'vue'
import { defineHex, Grid, rectangle, Hex } from 'honeycomb-grid'
import * as Pixi from 'pixi.js'

const Tile = defineHex({ dimensions: 10 })

const grid = new Grid(Tile, rectangle({ width: 100, height: 100 }))

const app = new Pixi.Application({ backgroundAlpha: 0, width: 1400, height: 600 })
const graphics = new Pixi.Graphics()

const mapContainer: null = ref(null)

const renderCanvas = (hex: Hex) => {
  const [firstCorner, ...otherCorners] = hex.corners

  // move the "pen" to the first corner
  graphics.moveTo(firstCorner.x, firstCorner.y)
  // draw lines to the other corners
  otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y))
  // finish at the first corner
  graphics.lineTo(firstCorner.x, firstCorner.y)

  app.stage.addChild(graphics)
}

onMounted(() => {
  mapContainer.value.appendChild(app.view)

  graphics.lineStyle(1, 0x999999)

  grid.forEach(renderCanvas)
})


const getThePosition = ({ offsetX, offsetY }: MapClick) => {
  const hex: Hex = grid.pointToHex(
    {
      x: offsetX,
      y: offsetY
    },
    {
      allowOutside: false
    }
  )

  if (hex === undefined)
    return false

  graphics.lineStyle(0)
  graphics.beginFill(0xDE3249, .2)
  graphics.drawCircle(offsetX, offsetY, 50)
  graphics.endFill()
}
</script>

<script lang="ts">

</script>



<template>
  <div ref="mapContainer" @click="getThePosition"></div>
</template>