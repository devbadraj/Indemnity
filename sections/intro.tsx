export default function Intro() {
  return (
    <section className="py-24 border-t">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 relative">
        {/* Vertical Separators */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Indemnity is an <em className="font-semibold text-foreground">autonomous, decentralized</em> insurance protocol where your coverage and premiums are determined <strong className="text-foreground">fairly, transparently, and instantly</strong>. <em className="font-semibold text-foreground">No paperwork. No middlemen.</em> Just <strong className="text-foreground">algorithmic protection</strong> built around you.
          </p>
        </div>
      </div>
    </section>
  );
}
