/* Custom cursor styles */
html {
  cursor: url('../images/chess-knight-cursor.png'), auto;
}

a, button, .clickable {
  cursor: url('../images/chess-pawn-cursor.png'), pointer !important;
}

/* Board game themed elements */
.chess-piece {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  opacity: 0.7;
  pointer-events: none;
}

.dice {
  position: absolute;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  opacity: 0.7;
  pointer-events: none;
}

.card {
  position: absolute;
  width: 30px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  opacity: 0.7;
  pointer-events: none;
}

/* Animation for floating elements */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

/* Animation for dice rolling */
@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rolling {
  animation: roll 3s ease-in-out infinite;
}

/* Animation for cards */
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

.flipping {
  animation: flip 4s ease-in-out infinite;
}

/* Create and position decorative elements */
document.addEventListener('DOMContentLoaded', function() {
  // Chess pieces
  const chessPieces = ['knight', 'pawn', 'rook', 'bishop', 'queen', 'king'];
  const chessColors = ['white', 'black'];
  
  // Create chess pieces
  for (let i = 0; i < 10; i++) {
    const piece = document.createElement('div');
    const pieceType = chessPieces[Math.floor(Math.random() * chessPieces.length)];
    const pieceColor = chessColors[Math.floor(Math.random() * chessColors.length)];
    
    piece.className = `chess-piece ${pieceType} ${pieceColor} floating`;
    piece.style.backgroundImage = `url('../images/chess-${pieceType}-${pieceColor}.png')`;
    
    // Random position
    piece.style.top = `${Math.random() * 100}vh`;
    piece.style.left = `${Math.random() * 100}vw`;
    
    // Random delay for animation
    piece.style.animationDelay = `${Math.random() * 5}s`;
    
    document.body.appendChild(piece);
  }
  
  // Create dice
  for (let i = 0; i < 5; i++) {
    const die = document.createElement('div');
    die.className = 'dice rolling';
    die.style.backgroundImage = `url('../images/die-${Math.floor(Math.random() * 6) + 1}.png')`;
    
    // Random position
    die.style.top = `${Math.random() * 100}vh`;
    die.style.left = `${Math.random() * 100}vw`;
    
    // Random delay for animation
    die.style.animationDelay = `${Math.random() * 5}s`;
    
    document.body.appendChild(die);
  }
  
  // Create cards
  for (let i = 0; i < 5; i++) {
    const card = document.createElement('div');
    card.className = 'card flipping';
    card.style.backgroundImage = `url('../images/card-${Math.floor(Math.random() * 4) + 1}.png')`;
    
    // Random position
    card.style.top = `${Math.random() * 100}vh`;
    card.style.left = `${Math.random() * 100}vw`;
    
    // Random delay for animation
    card.style.animationDelay = `${Math.random() * 5}s`;
    
    document.body.appendChild(card);
  }
  
  // Custom cursor implementation
  const cursorImage = new Image();
  cursorImage.src = '../images/chess-knight-cursor.png';
  
  document.addEventListener('mousemove', function(e) {
    // For browsers that don't support CSS cursor
    if (!CSS.supports('cursor', 'url(../images/chess-knight-cursor.png), auto')) {
      const cursor = document.querySelector('.custom-cursor') || document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.position = 'fixed';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.width = '30px';
      cursor.style.height = '30px';
      cursor.style.backgroundImage = 'url(../images/chess-knight-cursor.png)';
      cursor.style.backgroundSize = 'contain';
      cursor.style.backgroundRepeat = 'no-repeat';
      cursor.style.pointerEvents = 'none';
      cursor.style.zIndex = '9999';
      
      if (!document.querySelector('.custom-cursor')) {
        document.body.appendChild(cursor);
      }
    }
  });
});
