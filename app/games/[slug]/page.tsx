import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/app/lib/games-data";
import GameActions from "./game-actions";

export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/games"
          className="mb-6 inline-block text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          &larr; Back to Games
        </Link>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-6 p-6 sm:flex-row">
            <div className="h-64 w-48 flex-shrink-0 self-center overflow-hidden rounded-lg bg-gray-100 shadow-md dark:bg-gray-700 sm:self-start">
              <img
                src={game.coverUrl}
                alt={game.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {game.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  by{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {game.developer}
                  </span>
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Published by{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {game.publisher}
                  </span>
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {game.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-6">
                {game.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-lg bg-green-100 px-3 py-1.5 dark:bg-green-900">
                      <svg
                        className="h-5 w-5 text-green-600 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-lg font-bold text-green-700 dark:text-green-300">
                        {game.rating}
                      </span>
                    </div>
                    {game.ratingCount && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({game.ratingCount.toLocaleString()} reviews)
                      </span>
                    )}
                  </div>
                )}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Released:{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {new Date(game.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <GameActions />
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 dark:border-gray-700">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              About
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {game.summary}
            </p>
            {game.storyline && (
              <>
                <h3 className="mb-2 mt-4 text-md font-semibold text-gray-900 dark:text-white">
                  Storyline
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  {game.storyline}
                </p>
              </>
            )}
          </div>

          <div className="border-t border-gray-200 p-6 dark:border-gray-700">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Details
            </h2>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Platforms
                </dt>
                <dd className="mt-1 text-gray-900 dark:text-white">
                  {game.platforms.join(", ")}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Game Modes
                </dt>
                <dd className="mt-1 text-gray-900 dark:text-white">
                  {game.gameMode.join(", ")}
                </dd>
              </div>
              {game.playerPerspective && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Perspective
                  </dt>
                  <dd className="mt-1 text-gray-900 dark:text-white">
                    {game.playerPerspective}
                  </dd>
                </div>
              )}
              {game.themes && game.themes.length > 0 && (
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Themes
                  </dt>
                  <dd className="mt-1 text-gray-900 dark:text-white">
                    {game.themes.join(", ")}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
