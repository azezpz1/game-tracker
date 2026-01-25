"use client";

import { useState } from "react";
import Link from "next/link";
import { games, searchGames } from "@/app/lib/games-data";
import type { Game } from "@/app/lib/types";

function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
    >
      <div className="flex gap-4">
        <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-100 dark:bg-gray-700">
          <img
            src={game.coverUrl}
            alt={game.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {game.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {game.developer}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {game.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-xs text-gray-500 dark:text-gray-500">
              {new Date(game.releaseDate).getFullYear()}
            </span>
            {game.rating && (
              <span className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {game.rating}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const displayedGames = searchQuery ? searchGames(searchQuery) : games;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Browse Games
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Search and explore games to add to your collection
          </p>
        </header>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, developer, or genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {displayedGames.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              No games found matching "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {displayedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          Showing {displayedGames.length} of {games.length} games
        </footer>
      </div>
    </div>
  );
}
