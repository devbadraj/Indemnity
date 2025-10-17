export default function Intro() {
  return (
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Indemnity is an autonomous, decentralized insurance protocol where your coverage and premiums are determined fairly, transparently, and instantly. No paperwork. No middlemen. Just algorithmic protection built around you.
          </p>
        </div>
      </div>
    </section>
  );
}
