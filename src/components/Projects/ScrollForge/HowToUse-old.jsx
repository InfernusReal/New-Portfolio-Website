import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HowToUse = () => {
	const [activeExample, setActiveExample] = useState('installation');

	const examples = {
		installation: {
			title: 'Installation & Setup',
			description: 'Get started with ScrollForge in seconds',
			code: `# Create new project
npx scrollforge create my-app

# Navigate and install
cd my-app
npm install

# Start development server
npm run dev

# Or install in existing project
npm install scrollforge`
		},
		signals: {
			title: 'Signals - Universal Data Flow',
			description: 'Create reactive state that auto-connects everything',
			code: `import ScrollForge from 'scrollforge';
const app = new ScrollForge();

// Create signals
app.Script.signal('count', 0);
app.Script.signal('user', { name: 'John' });

// Watch changes
app.Script.watch('count', (count) => {
  console.log('Count:', count);
});

// Update state
app.Script.set('count', 5);
app.Script.set('user', { name: 'Jane' });`
		},
		actions: {
			title: 'Actions - State Mutations',
			description: 'Define actions to manage state changes systematically',
			code: `// Define actions
app.Script.action('INCREMENT', () => {
  const count = app.Script.get('count');
  app.Script.set('count', count + 1);
});

app.Script.action('SET_USER', (payload) => {
  app.Script.set('user', payload.user);
});

// Trigger actions
app.Script.trigger('INCREMENT');
app.Script.trigger('SET_USER', { 
  user: { name: 'Alice' } 
});`
		},
		components: {
			title: 'Components - Auto-Wiring Magic',
			description: 'Components that auto-connect with zero configuration',
			code: `import { HTMLScrollMesh } from 'scrollforge/mesh';

const Counter = HTMLScrollMesh(
  // UI Template
  ({ count }) => \`
    <div class="counter">
      <h1>Count: \${count}</h1>
      <button class="btn">+</button>
    </div>
  \`,
  
  // Logic (auto-wires!)
  (events, state) => {
    events.on('click', '.btn', () => {
      state.count++;
    });
  },
  
  // State
  () => ({ count: 0 })
);

Counter.mount('#app');`
		},
		styling: {
			title: 'ScrollWeave - Reactive Styling',
			description: 'Dynamic styles that respond to state changes',
			code: `// Apply styles
app.Weave.apply('.button', {
  background: 'blue',
  padding: '10px 20px',
  borderRadius: '5px'
});

// Conditional styling
app.Script.watch('isActive', (isActive) => {
  app.Weave.when('.button',
    isActive,
    { background: 'green' },
    { background: 'gray' }
  );
});

// Animations
app.Weave.fadeIn('.modal', 300);
app.Weave.spring('.element', {
  transform: 'translateY(0)'
});`
		},
		server: {
			title: 'Server-Side Magic',
			description: 'Build APIs with the same patterns as frontend',
			code: `import { ScrollScriptServer } from 'scrollforge/script';

const server = new ScrollScriptServer();

// Define routes
server.get('/api/users', 'FETCH_USERS');
server.post('/api/users', 'CREATE_USER');

// Action handlers
server.action('FETCH_USERS', ({ req, res }) => {
  const users = server.get('users');
  server.json(res, { users });
});

server.action('CREATE_USER', ({ req, res }) => {
  const users = server.get('users');
  server.set('users', [...users, req.body]);
  server.json(res, { success: true });
});

server.listen(3000);`
		}
	};

	const quickStart = [
		{
			step: '1',
			title: 'Install ScrollForge',
			description: 'Add to your project with npm',
			icon: '📦'
		},
		{
			step: '2',
			title: 'Create Signals',
			description: 'Define your reactive state',
			icon: '⚡'
		},
		{
			step: '3',
			title: 'Build Components',
			description: 'Auto-wiring HTML components',
			icon: '🏗️'
		},
		{
			step: '4',
			title: 'Add Styling',
			description: 'Reactive CSS with ScrollWeave',
			icon: '🎨'
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="how-to-use">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"
					animate={{
						backgroundPosition: ['0% 0%', '100% 100%'],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<motion.div
						className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<span className="text-lg">📚</span>
						How to Use ScrollForge
					</motion.div>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bungee font-bold mb-6">
						<span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
							Master the Framework
						</span>
					</h2>

					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						From zero to hero in minutes. Learn ScrollForge's revolutionary approach to 
						building reactive applications with minimal code.
					</p>
				</motion.div>

				{/* Quick Start Steps */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-20"
				>
					<h3 className="text-2xl font-bold text-white mb-8 text-center">Quick Start Guide</h3>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{quickStart.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/40 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
							>
								<div className="text-4xl mb-4">{item.icon}</div>
								<div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
									{item.step}
								</div>
								<h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
								<p className="text-gray-400 text-sm">{item.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Interactive Examples */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="grid grid-cols-1 lg:grid-cols-12 gap-8"
				>
					{/* Navigation */}
					<div className="lg:col-span-3">
						<h3 className="text-xl font-bold text-white mb-6">Examples</h3>
						<div className="space-y-3">
							{Object.entries(examples).map(([key, example]) => (
								<motion.button
									key={key}
									onClick={() => setActiveExample(key)}
									className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
										activeExample === key
											? 'bg-purple-500/20 border-purple-500/50 text-white'
											: 'bg-gray-900/40 border-gray-700/40 text-gray-300 hover:border-gray-600/60'
									}`}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="font-medium text-sm mb-1">{example.title}</div>
									<div className="text-xs opacity-70">{example.description}</div>
								</motion.button>
							))}
						</div>
					</div>

					{/* Code Display */}
					<div className="lg:col-span-9">
						<motion.div
							key={activeExample}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
							className="bg-gray-900/60 border border-gray-700/40 rounded-2xl overflow-hidden"
						>
							<div className="flex items-center justify-between p-4 border-b border-gray-700/40">
								<h4 className="text-lg font-bold text-white">{examples[activeExample].title}</h4>
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>
							</div>
							
							<div className="p-6">
								<p className="text-gray-400 mb-4 text-sm">{examples[activeExample].description}</p>
								<pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
									<code className="text-green-400 text-sm font-mono whitespace-pre">
										{examples[activeExample].code}
									</code>
								</pre>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Key Concepts */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center">Key Concepts</h3>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: '🧠',
								title: 'Shared Variables Theory',
								description: 'Functions connect through shared global state instead of props drilling. Revolutionary paradigm shift.',
								highlight: 'Paradigm Shift'
							},
							{
								icon: '⚡',
								title: 'Auto-Wiring',
								description: 'Components detect what they need and auto-connect. Zero configuration, maximum productivity.',
								highlight: 'Zero Config'
							},
							{
								icon: '🌊',
								title: 'Causal Graph Programming',
								description: 'Every interaction creates traceable causal relationships across your entire application.',
								highlight: 'World First'
							},
							{
								icon: '🚀',
								title: 'Three-Engine Architecture',
								description: 'ScrollScript (state), ScrollWeave (styling), ScrollMesh (components) work in perfect harmony.',
								highlight: 'Unified System'
							},
							{
								icon: '🔄',
								title: 'Universal Patterns',
								description: 'Same patterns work on frontend, backend, mobile, and desktop. One framework, everywhere.',
								highlight: 'Universal'
							},
							{
								icon: '📊',
								title: 'Time-Travel Debugging',
								description: 'Undo any action, jump to any point in time. See the complete history of your app.',
								highlight: 'Time Travel'
							}
						].map((concept, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/40 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 group"
								whileHover={{ scale: 1.02 }}
							>
								<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
									{concept.icon}
								</div>
								<div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-3">
									{concept.highlight}
								</div>
								<h4 className="text-lg font-bold text-white mb-3">{concept.title}</h4>
								<p className="text-gray-400 text-sm leading-relaxed">{concept.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="text-center mt-20"
				>
					<div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12">
						<h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Revolution?</h3>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							Join the developers who've discovered the power of Causal Graph Programming. 
							Build reactive applications with unprecedented simplicity.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								onClick={() => window.open('https://github.com/InfernusReal/ScrollForge-Unified-Framework', '_blank')}
								className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center gap-2">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
									View on GitHub
								</span>
							</motion.button>
							
							<motion.button
								onClick={() => window.open('https://www.npmjs.com/package/scrollforge', '_blank')}
								className="px-8 py-4 bg-gray-800 border border-gray-600 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center gap-2">
									<span className="text-red-500 font-bold">npm</span>
									Install Package
								</span>
							</motion.button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowToUse;