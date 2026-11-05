
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Target,
  TrendingUp,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const missionPoints = [
  "Make practical learning more accessible",
  "Connect education with real-world experience",
  "Support learners through mentorship",
];

const visionPoints = [
  "Empower the next generation of professionals",
  "Bridge the gap between skills and opportunities",
  "Build meaningful career pathways",
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="section relative overflow-hidden bg-[#F7FAF8]"
      aria-label="Our Mission and Vision"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#60BA45]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#00A5D5]/5 blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Section introduction */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">
              OUR PURPOSE
            </span>

            <h2 className="heading mt-4">
              Driven by Purpose.
              <br />
              <span className="text-gradient">
                Focused on Your Future.
              </span>
            </h2>

            <p className="lead mt-5">
              At Build Something Great, our mission and vision
              guide how we support learners, develop skills,
              and create pathways toward meaningful careers.
            </p>
          </div>
        </Reveal>

        {/* Mission and Vision Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Mission */}
          <Reveal className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCEFD6] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/5 sm:p-10">

              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-[#60BA45]" />

              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F9ED] text-[#438F32]">
                  <Target size={30} strokeWidth={1.8} />
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-[#60BA45] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <SectionTitle
                label="OUR MISSION"
                title="Empower Learning. Enable Growth."
                desc="To make industry-relevant skills, practical experience, personalized mentorship, and career guidance more accessible to students and aspiring professionals."
              />

              <div className="mt-8 space-y-4">
                {missionPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#438F32]"
                    />

                    <span className="text-sm font-medium leading-relaxed text-slate-600">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <div className="flex items-center gap-3 rounded-2xl bg-[#F0F9ED] px-5 py-4">
                  <TrendingUp
                    size={21}
                    className="shrink-0 text-[#438F32]"
                  />

                  <span className="text-sm font-bold text-[#333333]">
                    Learn. Build. Grow.
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Vision */}
          <Reveal className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D7F1F9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/5 sm:p-10">

              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-[#00A5D5]" />

              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF9FD] text-[#0085AD]">
                  <Compass size={30} strokeWidth={1.8} />
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-[#00A5D5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <SectionTitle
                label="OUR VISION"
                title="Build From India. Inspire Everywhere."
                desc="To create a future where every learner can develop valuable skills, access meaningful opportunities, and confidently pursue their career ambitions."
              />

              <div className="mt-8 space-y-4">
                {visionPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#0085AD]"
                    />

                    <span className="text-sm font-medium leading-relaxed text-slate-600">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <div className="flex items-center gap-3 rounded-2xl bg-[#EAF9FD] px-5 py-4">
                  <Compass
                    size={21}
                    className="shrink-0 text-[#0085AD]"
                  />

                  <span className="text-sm font-bold text-[#333333]">
                    Building Opportunities Beyond Boundaries
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
