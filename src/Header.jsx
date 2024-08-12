import Player from "./Components/Player";

function Header() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player-1" symbol="x"></Player>
          <Player initialName="Player-2" symbol="O"></Player>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default Header;

