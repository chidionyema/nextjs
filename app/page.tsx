import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-indigo-900 to-black text-white">
      <div className="z-10 max-w-7xl w-full flex flex-col items-center justify-between space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to <span className="text-blue-400">LuciferAeo</span>
        </h1>
        <p className="text-center text-lg font-sans leading-relaxed mt-4">
          Embark on a journey through the psyche with cutting-edge AI technology. Experience transformative insights into the depths of human cognition.
        </p>
        <div className="flex w-full justify-center mt-6">
          <Image
            src="/luciferaeo_logo.svg" // Replace with LuciferAeo's logo
            alt="LuciferAeo Logo"
            className="drop-shadow-lg"
            width={200}
            height={60}
            priority
          />
        </div>
      </div>

      <section className="mt-16 mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <FeatureCard
          link="/ai-insights"
          title="AI Insights"
          description="Delve into advanced AI analytics for deep psychological understanding."
        />
        <FeatureCard
          link="cognitive-analysis"
          title="Cognitive Analysis"
          description="Explore the intricacies of your cognitive processes with our tailored AI solutions."
        />
        <FeatureCard
          link="personalized-therapy"
          title="Personalized AI Therapy"
          description="Engage in personalized therapeutic sessions guided by AI for profound mental well-being."
        />
        <FeatureCard
          link="interactive-learning"
          title="Interactive Learning"
          description="Learn and grow with our AI-driven interactive psychological courses."
        />
      </section>
    </main>
  )
}

function FeatureCard({ link, title, description }) {
  return (
    <a
      href={link}
      className="group rounded-lg border border-gray-500 px-6 py-5 transition-all hover:border-blue-500 hover:bg-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="mb-3 text-2xl font-semibold">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </h3>
      <p className="m-0 text-sm">
        {description}
      </p>
    </a>
  )
}
