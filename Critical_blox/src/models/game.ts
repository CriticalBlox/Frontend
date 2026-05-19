export type Game = {
  id: number
  red_score: number
  blue_score: number
  winner_team: 'red' | 'blue' | null
  map_name: string
}

export type GamePlayer = {
  id: number
  pseudo: string
  team: 'red' | 'blue'
  kills: number
  deaths: number
}