
const FloatingBubbles = () => {
  const bubbleCount = 10;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
    id: i,
    // Random size between 20px and 40px
    size: `${Math.random() * 20 + 20}px`, 
    // Random horizontal position
    left: `${Math.random() * 100}%`,
    // Random duration for subtle speed variation
    duration: `${Math.random() * 10 + 15}s`, 
    // Stagger the start time so they don't all start at once
    delay: `-${Math.random() * 15}s`, 
  }));

  return (
    <div className="bubble-container">
      {bubbles.map(bubble => (
        <div 
          key={bubble.id} 
          className="bubble" 
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;