import Header from "@/components/Header";
import React from "react";

function Page() {
  return (
    <main className="bg-slate-600 text-slate-300">
      {/* Header */}
      <Header />
      {Array.from({ length: 4 }).map((_, index) => (
        <section
          key={index}
          className={`min-h-[500px] ${
            index % 2 === 0 ? "bg-slate-700" : "bg-slate-800"
          }`}>
          <h3 className="text-center py-2">Section {index + 1}</h3>
        </section>
      ))}
    </main>
  );
}

export default Page;
