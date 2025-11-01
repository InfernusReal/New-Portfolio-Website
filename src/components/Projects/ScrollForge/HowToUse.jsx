import React from 'react';
import { motion } from 'framer-motion';

const HowToUse = () => {
	const sections = [
		{
			id: 'installation',
			title: 'Installation & Setup',
			icon: '📦',
			content: [
				{
					title: 'Method 1: CLI (Recommended)',
					code: `# Create new project
npx scrollforge create my-app

# Navigate and install
cd my-app && npm install

# Start development
npm run dev`
				},
				{
					title: 'Method 2: Manual Installation',
					code: `# Install package
npm install scrollforge

# Import and initialize
import ScrollForge from "scrollforge";
const app = new ScrollForge();`
				},
				{
					title: 'Method 3: Individual Engines',
					code: `// Import only what you need
import { ScrollScriptClient } from 'scrollforge/script';
import { ScrollWeaveCore } from 'scrollforge/weave';
import { ScrollMeshCore } from 'scrollforge/mesh';`
				}
			]
		},
		{
			id: 'scrollscript',
			title: 'ScrollScript - Universal Data Flow',
			icon: '⚡',
			content: [
				{
					title: 'Creating Signals (Reactive State)',
					code: `// Simple values
app.Script.signal('count', 0);
app.Script.signal('username', 'Guest');
app.Script.signal('isLoggedIn', false);

// Complex objects
app.Script.signal('user', { name: 'John', age: 25 });
app.Script.signal('todos', []);

// With scope
app.Script.signal('pageData', {}, 'page');`
				},
				{
					title: 'Reading & Writing State',
					code: `// Get current value
const count = app.Script.get('count');
console.log(count); // 0

// Update value (triggers all watchers)
app.Script.set('count', 5);

// Update objects
const user = app.Script.get('user');
app.Script.set('user', { ...user, age: 26 });`
				},
				{
					title: 'Watching Changes',
					code: `// Watch for changes
app.Script.watch('count', (newValue, oldValue) => {
  console.log(\`Count: \${oldValue} → \${newValue}\`);
});

// Unsubscribe when done
const unsubscribe = app.Script.watch('count', callback);
unsubscribe(); // Stop watching`
				},
				{
					title: 'Derived Signals (Computed Values)',
					code: `app.Script.signal('firstName', 'John');
app.Script.signal('lastName', 'Doe');

// Auto-computed from dependencies
app.Script.derived('fullName', () => {
  const first = app.Script.get('firstName');
  const last = app.Script.get('lastName');
  return \`\${first} \${last}\`;
}, ['firstName', 'lastName']);

// Updates automatically!
app.Script.set('firstName', 'Jane');
app.Script.get('fullName'); // 'Jane Doe'`
				},
				{
					title: 'Actions & Triggers (The Apex Manager)',
					code: `// Define action handler
app.Script.action('INCREMENT', () => {
  const count = app.Script.get('count');
  app.Script.set('count', count + 1);
});

// Action with payload
app.Script.action('SET_USER', (payload) => {
  app.Script.set('user', payload.user);
});

// Trigger actions
app.Script.trigger('INCREMENT');
app.Script.trigger('SET_USER', { user: { name: 'John' } });`
				},
				{
					title: 'Event Bindings (Client)',
					code: `// Keyboard events
app.Script.onKey('Enter', 'SUBMIT_FORM');
app.Script.onKey('Escape', 'CLOSE_MODAL');

// Click events
app.Script.onClick('#my-button', 'BUTTON_CLICKED');
app.Script.onClick('.user-btn', 'USER_CLICKED', (e) => ({
  userId: e.target.dataset.userId
}));

// Form events
app.Script.onSubmit('#my-form', 'FORM_SUBMITTED');
app.Script.onInput('#search', 'SEARCH_CHANGED');`
				}
			]
		},
		{
			id: 'scrollweave',
			title: 'ScrollWeave - Reactive Styling',
			icon: '🎨',
			content: [
				{
					title: 'Apply Styles',
					code: `// Basic styling
app.Weave.apply('.button', {
  background: 'blue',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '1rem'
});

// With transition
app.Weave.apply('.button', {
  background: 'green'
}, {
  property: 'background',
  duration: 300,
  easing: 'ease-in-out'
});`
				},
				{
					title: 'Conditional Styling',
					code: `// Simple condition
const isActive = true;
app.Weave.when('.button',
  isActive,
  { background: 'green', color: 'white' },
  { background: 'gray', color: 'black' }
);

// Reactive (inside watch)
app.Script.watch('isActive', (isActive) => {
  app.Weave.when('.button',
    isActive,
    { background: 'green' },
    { background: 'gray' }
  );
});`
				},
				{
					title: 'Animations',
					code: `// Fade effects
app.Weave.fadeIn('.modal', 300);
app.Weave.fadeOut('.modal', 300);

// Slide animations
app.Weave.slideIn('.sidebar', 'left', 400);

// Spring physics
app.Weave.spring('.element', {
  transform: 'translateY(0)',
  opacity: 1
}, {
  stiffness: 200,
  damping: 20,
  mass: 1
});`
				},
				{
					title: 'Design Tokens & Themes',
					code: `// Define tokens
app.Weave.token('primary', '#667eea');
app.Weave.token('spacing-md', '1rem');

// Create themes
app.Weave.theme('dark', {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#667eea'
});

// Apply theme
app.Weave.applyTheme('dark');`
				}
			]
		},
		{
			id: 'scrollmesh',
			title: 'ScrollMesh - Component Assembly',
			icon: '🏗️',
			content: [
				{
					title: 'Mode 1: Blueprints (Original)',
					code: `// Define blueprint
app.Mesh.blueprint('Button', (props) => ({
  tag: 'button',
  attrs: { class: 'btn' },
  content: props.label,
  style: {
    padding: '10px 20px',
    background: 'blue',
    color: 'white'
  },
  events: {
    click: props.onClick
  }
}));

// Create and render
const button = app.Mesh.create('Button', {
  label: 'Click me',
  onClick: () => console.log('Clicked!')
});
app.Mesh.render(button, '#app');`
				},
				{
					title: 'Mode 2: Reactive Components',
					code: `// Auto-re-rendering component
const Counter = app.Mesh.component('Counter', {
  state: { count: 0 },
  
  render({ count }) {
    return {
      tag: 'button',
      content: \`Count: \${count}\`,
      events: {
        click: () => {
          this.state.count++; // Auto-re-renders!
        }
      }
    };
  }
});

Counter.mount('#app');`
				},
				{
					title: 'Mode 3: Context (Auto-Wiring) - THE BREAKTHROUGH',
					code: `import { ScrollMesh } from 'scrollforge/mesh';

// Unlimited functions auto-connect!
const TodoApp = ScrollMesh(
  // UI Function (gets state)
  ({ todos, filter }) => \`
    <div class="todo-app">
      <input class="new-todo" placeholder="Add todo..." />
      <ul>
        \${todos.filter(filterFn).map(t => \`
          <li class="todo \${t.done ? 'done' : ''}">
            <input type="checkbox" \${t.done ? 'checked' : ''}>
            <span>\${t.text}</span>
          </li>
        \`).join('')}
      </ul>
    </div>
  \`,
  
  // Logic Function (gets events + state)
  (events, state) => {
    events.on('keydown', '.new-todo', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        state.todos = [...state.todos, {
          id: Date.now(),
          text: e.target.value.trim(),
          done: false
        }];
        e.target.value = '';
      }
    });
  },
  
  // State Function (returns initial state)
  () => ({
    todos: [],
    filter: 'all'
  })
);

TodoApp.mount('#app');`
				},
				{
					title: 'Mode 4: HTML Templates',
					code: `import { HTMLScrollMesh } from 'scrollforge/mesh';

const Counter = HTMLScrollMesh(
  // HTML Template
  ({ count }) => \`
    <div class="counter">
      <h1>Count: \${count}</h1>
      <button class="increment-btn">+</button>
    </div>
  \`,
  
  // Logic
  (events, state) => {
    events.on('click', '.increment-btn', () => {
      state.count++;
    });
  },
  
  // State
  () => ({ count: 0 })
);

Counter.mount('#app');`
				}
			]
		},
		{
			id: 'server',
			title: 'ScrollScript Server - Backend Ultimate',
			icon: '🚀',
			content: [
				{
					title: 'Basic Server Setup',
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

server.listen(3000);`
				},
				{
					title: 'Composable Routers',
					code: `// Create router
const apiRouter = server.createRouter('/api');

// Add routes
apiRouter.get('/users', handler);
apiRouter.get('/users/:id', handler);

// Nest routers
const adminRouter = server.createRouter('/admin');
server.use(apiRouter);      // /api/users
server.use(adminRouter);    // /admin/dashboard`
				},
				{
					title: 'WebSocket Channels',
					code: `// Create channel
const chatChannel = server.channel('chat', {
  replayLimit: 50
});

// Handle events
chatChannel.on('MESSAGE', (data, client) => {
  chatChannel.broadcast('NEW_MESSAGE', {
    user: data.user,
    text: data.text,
    timestamp: Date.now()
  });
});

// Auto-sync signals
server.signal('liveCount', 0);
server.autoSync('liveCount');
// All clients get updates instantly!`
				}
			]
		},
		{
			id: 'forgefetch',
			title: 'ForgeFetch - Advanced HTTP Client',
			icon: '💻',
			content: [
				{
					title: 'Basic Requests',
					code: `// GET request
const response = await app.Script.fetch.get('/api/users');
console.log(response.data, response.status);

// POST with data
const response = await app.Script.fetch.post('/api/users', {
  name: 'John',
  email: 'john@example.com'
});

// Other methods
await app.Script.fetch.put('/api/users/1', data);
await app.Script.fetch.delete('/api/users/1');
await app.Script.fetch.patch('/api/users/1', updates);`
				},
				{
					title: 'Configuration & Interceptors',
					code: `// Set base URL and headers
app.Script.fetch.setBaseURL('http://localhost:3000');
app.Script.fetch.setHeaders({
  'Authorization': 'Bearer my-token'
});

// Request interceptor
app.Script.fetch.onRequest((config) => {
  config.headers['X-Request-Time'] = Date.now();
  return config;
});

// Response interceptor
app.Script.fetch.onResponse((response) => {
  // Transform data
  return response;
});`
				},
				{
					title: 'Advanced Features',
					code: `// Retry with backoff
const response = await app.Script.fetch.get('/api/data', {
  retry: {
    attempts: 3,
    backoff: 'exponential' // 1s, 2s, 4s
  }
});

// Request caching
const cached = await app.Script.fetch.get('/api/users', {
  cache: { ttl: 60000 } // Cache for 1 minute
});

// Reactive GET (auto-updates signal)
app.Script.fetch.reactiveGet('/api/users', 'users', {
  transform: (data) => data.users,
  interval: 2000 // Poll every 2 seconds
});`
				},
				{
					title: 'Resource Helper - Full CRUD',
					code: `// One liner = full CRUD API!
const usersAPI = app.Script.fetch.resource('users', '/api/users');

// Fetch all (updates 'users' signal)
await usersAPI.fetch();

// Create (updates signal + optimistic)
await usersAPI.create({ name: 'John' }, true);

// Update (optimistic updates)
await usersAPI.update(1, { name: 'Jane' }, true);

// Delete
await usersAPI.delete(1, true);`
				}
			]
		},
		{
			id: 'enterprise',
			title: 'Enterprise Scaling Features',
			icon: '🏢',
			content: [
				{
					title: 'Virtual Lists (Handle Millions)',
					code: `import { createVirtualList } from 'scrollforge/mesh';

const hugeArray = new Array(1000000).fill(0);

const list = createVirtualList('#container', hugeArray, 
  (item, index) => {
    const div = document.createElement('div');
    div.textContent = \`Item \${index}\`;
    return div;
  }, {
    itemHeight: 50,
    overscan: 5
  }
);

// 1 million items, 60fps! ✨`
				},
				{
					title: 'Web Worker Pool',
					code: `import { globalWorkerPool } from 'scrollforge/runtime';

// Heavy computation off main thread
const result = await globalWorkerPool.run((data) => {
  // This runs in Web Worker!
  return data.map(item => {
    // Heavy calculation
    return processItem(item);
  });
}, hugeDataset);

// UI stays smooth! ✅`
				},
				{
					title: 'Scene Manager (Multi-Scene Apps)',
					code: `import { createScene, switchScene } from 'scrollforge/runtime';

// Create isolated scenes
const dashboard = createScene('dashboard');
const admin = createScene('admin');

// Each has its own state
dashboard.script.signal('data', []);
admin.script.signal('users', []);

// Switch scenes
switchScene('dashboard');

// Share signals across scenes
globalSceneManager.shareSignal('currentUser', 
  'dashboard', 'admin');`
				},
				{
					title: 'Advanced Scheduler (4-Lane Priority)',
					code: `import { schedule, chunkTask } from 'scrollforge/mesh';

// Priority lanes
schedule(handleClick, 'input');        // Highest
schedule(updateAnimation, 'animation'); // High  
schedule(fetchData, 'network');        // Normal
schedule(logAnalytics, 'idle');        // Lowest

// Chunk long tasks
chunkTask(hugeArray, processItem, {
  chunkSize: 100,
  priority: 'idle',
  onProgress: (done, total) => {
    console.log(\`\${done}/\${total}\`);
  }
});`
				}
			]
		},
		{
			id: 'cli',
			title: 'CLI Commands',
			icon: '🛠️',
			content: [
				{
					title: 'Project Management',
					code: `# Create new project
sf create my-app
sf create my-app --template counter

# Development server
sf dev
sf dev --port 8080 --open

# Build for production
sf build
sf build --output dist --minify`
				},
				{
					title: 'Code Generation',
					code: `# Generate component
sf generate component UserList

# Generate route (server)
sf generate route getUsers

# Generate action
sf generate action FETCH_USERS

# Generate signal
sf generate signal userCount`
				},
				{
					title: 'Analysis & Optimization',
					code: `# Analyze codebase
sf analyze

# Find circular dependencies
sf analyze --find-cycles

# Output:
# Modules: 25, Signals: 45, Actions: 67
# [!] Unused signals: tempData
# [!] Circular dependency: moduleA -> moduleB -> moduleA`
				}
			]
		},
		{
			id: 'theory',
			title: 'Shared Variables Theory',
			icon: '🎯',
			content: [
				{
					title: 'The Paradigm Shift',
					code: `// Traditional: Props drilling
<Parent>
  <Child onClick={handler} data={data} />
    <GrandChild onClick={handler} data={data} />
</Parent>

// Shared Variables: Global state
app.Script.signal('sharedData', {});
app.Script.action('SHARED_ACTION', handler);

// Any component can:
app.Script.get('sharedData');
app.Script.trigger('SHARED_ACTION');
// No props drilling! ✨`
				},
				{
					title: 'Single Dispatcher Architecture',
					code: `// All actions go through one dispatcher
app.Script.action('USER_LOGIN', (payload) => {
  // Update multiple signals
  app.Script.set('user', payload.user);
  app.Script.set('isLoggedIn', true);
  app.Script.set('lastLogin', new Date());
});

// Trigger from anywhere
app.Script.trigger('USER_LOGIN', { user });

// All state updates are centralized! 🎯`
				},
				{
					title: 'Cross-Environment Sync',
					code: `// Client
app.Script.signal('users', []);
app.Script.watch('users', render);

// Server (Node.js)
server.signal('users', []);
server.autoSync('users');

// Any server change broadcasts to ALL clients!
server.set('users', newUsers);
// All browser tabs update instantly! ⚡`
				}
			]
		}
	];

	return (
		<section id="how-to-use" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" data-section="how-to-use">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
						Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Framework</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-4xl mx-auto font-lora leading-relaxed">
						Complete guide to ScrollForge's revolutionary Causal Graph Programming paradigm. 
						From basic signals to enterprise scaling - master every command, feature, and concept.
					</p>
				</motion.div>

				<div className="space-y-8">
					{sections.map((section, sectionIndex) => (
						<motion.div
							key={section.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
							className="bg-black/40 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm"
						>
							<div className="flex items-center gap-4 mb-8">
								<div className="text-4xl">{section.icon}</div>
								<div>
									<h3 className="text-2xl lg:text-3xl font-bold text-white font-inter">
										{section.title}
									</h3>
								</div>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
								{section.content.map((item, itemIndex) => (
									<motion.div
										key={itemIndex}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
										className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-6"
									>
										<h4 className="text-lg font-semibold text-purple-300 mb-4 font-inter">
											{item.title}
										</h4>
										<div className="bg-black/60 border border-gray-600/30 rounded-lg p-4 overflow-x-auto">
											<pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
												{item.code}
											</pre>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Quick Reference */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-2xl p-8"
				>
					<h3 className="text-2xl font-bold text-white mb-6 font-inter">
						🚀 Quick Reference
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ 
								label: 'Create Signal', 
								code: 'app.Script.signal("count", 0)' 
							},
							{ 
								label: 'Watch Changes', 
								code: 'app.Script.watch("count", fn)' 
							},
							{ 
								label: 'Define Action', 
								code: 'app.Script.action("TYPE", fn)' 
							},
							{ 
								label: 'Trigger Action', 
								code: 'app.Script.trigger("TYPE")' 
							}
						].map((ref, index) => (
							<div key={index} className="bg-black/40 border border-gray-700/30 rounded-lg p-4">
								<div className="text-sm font-medium text-purple-300 mb-2">{ref.label}</div>
								<code className="text-xs text-gray-300 font-mono">{ref.code}</code>
							</div>
						))}
					</div>
				</motion.div>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mt-12"
				>
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
								Explore Full Source
							</span>
						</motion.button>
						<motion.button
							onClick={() => window.open('https://www.npmjs.com/package/scrollforge', '_blank')}
							className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="flex items-center gap-2">
								<span className="text-red-400 font-bold">npm</span>
								Install ScrollForge
							</span>
						</motion.button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowToUse;