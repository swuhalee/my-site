export default function About() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <h1 className="text-3xl font-bold text-black mt-4 mb-8">About</h1>

      {/* Personal Info */}
      <section className="bg-gray-50 p-6 rounded-none border border-gray-300 mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700"><strong>Name:</strong> Suha Lee</p>
            <p className="text-gray-700"><strong>Email:</strong> swuhalee@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-700"><strong>GitHub:</strong> github.com/swuhalee</p>
            <p className="text-gray-700"><strong>LinkedIn:</strong> linkedin.com/in/suha-lee-172a84359</p>
            <p className="text-gray-700"><strong>Blog:</strong> https://suhalee.tistory.com</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 p-6 rounded-none border border-gray-300 mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">Flutter</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">React Native</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">React</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">TypeScript</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">JavaScript</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">Firebase</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">Figma</span>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-50 p-6 rounded-none border border-gray-300 mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-black">Frontend Developer (Freelance)</h3>
            <p className="text-orange-500 font-medium">Kindred (UK) • December 2024 - July 2025</p>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li>• Developed and launched 'Click to Give' donation app in collaboration with WWF</li>
              <li>• Integrated external APIs (LinkPrice, Coupang Partners) for multi-partnership management</li>
              <li>• Connected 20+ partner shopping malls, expanding user choices and improving reward revenue by 4%</li>
              <li>• Selected React Native (TypeScript) tech stack for Kindred SDK official support and future maintenance efficiency</li>
              <li>• Implemented cross-platform shopping reward tracking system using Kindred SDK</li>
              <li>• Built serverless architecture with Firebase for efficient full-stack development and operation</li>
              <li>• Utilized Firebase Analytics, Authentication, Firestore, Functions, Remote Config, Messaging, Storage</li>
              <li>• Developed admin web page using React (TypeScript) + Firebase Hosting with user/notice/event/notification management</li>
              <li>• Created custom HTML event page editor using GrapesJS</li>
              <li>• Handled UI/UX design and planning using Figma</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://www.wwfkorea.or.kr/bbs/board.php?bo_table=press_release&wr_id=220&ht=&utm_medium=cpc&utm_source=google_pc&utm_campaign=fy21polarbear&utm_term=WWF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                App Press Release →
              </a>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-black">Frontend Developer (Freelance)</h3>
            <p className="text-orange-500 font-medium">엠엔에스마케팅 (Korea) • March 2025 - July 2025</p>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li>• Designed and developed initial architecture for 'Rally' fitness tracking app supporting walking/running/hiking/trail running</li>
              <li>• Implemented systematic state management using Provider + Riverpod combination</li>
              <li>• Applied Root pattern for code structuring</li>
              <li>• Built map functionality based on Mapbox and implemented navigation TTS through OSM</li>
              <li>• Selected Mapbox package for 3D map rendering with intuitive elevation visualization for hiking</li>
              <li>• Created custom map themes using Mapbox Studio to reduce development time</li>
              <li>• Implemented real-time group exercise synchronization with polling-based location sharing</li>
              <li>• Developed background location tracking system using Flutter Background Service and location caching</li>
              <li>• Designed local DB using Drift and implemented performance optimization with Isolate for real-time location tracking</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://www.mountainlog.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                App Website →
              </a>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-black">Flutter Developer (Intern)</h3>
            <p className="text-orange-500 font-medium">백슬래시파트너스 (Korea) • August 2024 - October 2024</p>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li>• Developed and launched AI-based diet management app 'Diet Lens' with Calo AI integration</li>
              <li>• Implemented efficient state management and routing system using GetX, improving development speed</li>
              <li>• Automated REST API integration using Swagger + Chopper, reducing development time by 60%</li>
              <li>• Developed 'soccerbee' football match analysis app with GPS wearable data integration</li>
              <li>• Created match analysis charts and visualization dashboard for user performance analysis</li>
              <li>• Built '네일만 기다려' nail art booking platform with user and shop owner apps</li>
              <li>• Handled app store deployment and pre-launch process (excluding payment functionality)</li>
              <li>• Implemented real-time chat using polling for smooth communication between users and shop owners</li>
            </ul>
            <div className="mt-3">
              <p className="text-gray-600 text-sm italic">
                * Internship was personally applied for during 4th year 2nd semester and was credited as major internship credits for graduation requirements
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 p-6 rounded-none border border-gray-300 mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Certifications</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-black">정보처리기사</h3>
            <p className="text-orange-500 font-medium">한국산업인력공단 • July 2024</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-black">정보처리산업기사</h3>
            <p className="text-orange-500 font-medium">한국산업인력공단 • September 2023</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-50 p-6 rounded-none border border-gray-300">
        <h2 className="text-2xl font-semibold text-black mb-4">Education</h2>
        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-lg font-semibold text-black">Bachelor of Computer Software Engineering</h3>
          <p className="text-orange-500 font-medium">한국성서대학교 • February 2021 - February 2025</p>
          <p className="text-gray-700 mt-2">Computer Software Engineering Major</p>
          <p className="text-gray-700">GPA: 3.58/4.3</p>
        </div>
      </section>
    </div>
  );
} 