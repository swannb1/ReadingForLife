const HeroBanner = () => {
  // Orange triangles: back (short, opaque) -> middle (taller, slightly transparent) -> front (tallest, more transparent)
  const topLayers = [
    { height: 60, opacity: 0.45 },
    { height: 100, opacity: 0.45 },
    { height: 140, opacity: 0.45 },
  ];

  // Blue triangles along the bottom edge (anchor bottom-right, extend upward into hero)
  const bottomLayers = [
    { height: 60, opacity: 0.45 },
    { height: 100, opacity: 0.45 },
    { height: 140, opacity: 0.45 },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="w-full h-[390px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80")',
        }}
      />

      {/* Orange triangles fading down from the top */}
      <div className="pointer-events-none absolute inset-0">
        {/* Orange triangles (top-left) */}
        <div className="absolute top-0 left-0 right-0">
          {topLayers.map((layer, index) => (
            <div
              key={`top-triangle-${index}`}
              className="absolute left-0 right-0"
              style={{
                height: `${layer.height}px`,
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                backgroundColor: `rgba(199, 110, 62, ${layer.opacity})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Blue triangles rising from bottom-right across the bottom edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        {bottomLayers.map((layer, index) => (
          <div
            key={`bottom-triangle-${index}`}
            className="absolute left-0 right-0"
            style={{
              height: `${layer.height}px`,
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              background: `linear-gradient(0deg, rgba(64, 95, 122, ${layer.opacity}) 0%, rgba(64, 95, 122, 0) 90%)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroBanner;
