import Head from "next/head";
import Image from "next/image";
import { Board } from "../components/Board";
import { Guides } from "../components/Guides";
import { Shop } from "../components/Shop";
import { mappings } from "../constants/mappings";
import { useGameContext } from "../contexts/game";

const pointFormat = new Intl.NumberFormat().format;

export default function Home() {
  const { game, renderCount } = useGameContext();

  if (!game) {
    return;
  }

  return (
    <div className="overflow-auto flex bg-tripod min-h-screen min-w-screen relative">
      <Head>
        <title>Triple Pod</title>
      </Head>
      <div className="absolute w-full h-full flex items-center">
        <div className="flex flex-wrap max-w-[960px] w-full mx-auto">
          <div className="w-full text-white text-xs md:text-xl space-x-1 flex">
            <div className="px-3 py-2 rounded-md bg-tripod-900/70 w-1/3">
              <div className="flex items-center justify-between h-full">
                <span>Next</span>
                <Image
                  src={`/pieces/${mappings[game.state.currentPiece.id].image}`}
                  width={24}
                  height={24}
                  alt="coins"
                  key={renderCount}
                />
              </div>
            </div>
            <div className="px-3 py-2 rounded-md bg-tripod-900/70 w-1/3">
              <div className="flex items-center justify-between h-full">
                <span key={renderCount}>{pointFormat(game.state.points)}</span>
                <span>Points</span>
              </div>
            </div>
            <div className="px-3 py-2 rounded-md bg-tripod-900/70 w-1/3">
              <div className="flex items-center justify-between h-full">
                <span className="flex items-center space-x-2">
                  <Image src="/coins.png" width={20} height={20} alt="coins" />
                  <span key={renderCount}>{pointFormat(game.state.coins)}</span>
                </span>
                <span>Coins</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <Board showGridText />
          </div>
          <div className="w-full md:w-1/3">
            <Shop />
          </div>
          <div className="w-full">
            <Guides />
          </div>
        </div>
      </div>
    </div>
  );
}
