import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeaderBoardView from "@/views/LeaderBoardView.vue";
import GameView from "@/views/GameView.vue";
import StatsView from "@/views/StatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderBoardView,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView,
    },
  ],
})

export default router
