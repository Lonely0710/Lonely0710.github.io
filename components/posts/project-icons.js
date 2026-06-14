import { Layers, Smartphone, Wrench } from 'lucide-react'
import { brandIcon } from '../ui/icon-paths'

const brand = (file, label) => ({ src: brandIcon(file), label })

export const projectBrandIcons = {
    android: brand('android.svg', 'Android'),
    apple: brand('apple.svg', 'iOS'),
    convex: brand('convex.svg', 'Convex'),
    dart: brand('dart.svg', 'Dart'),
    fastapi: brand('fastapi.svg', 'FastAPI'),
    finder: brand('finder.png', 'macOS'),
    flutter: brand('flutter.svg', 'Flutter'),
    linux: brand('linux.svg', 'Linux'),
    microsoft: brand('microsoft.svg', 'Windows'),
    python: brand('python.svg', 'Python'),
    react: brand('react.svg', 'React'),
    supabase: brand('supabase.svg', 'Supabase'),
    swift: brand('swift.svg', 'Swift'),
    tailwindcss: brand('tailwindcss.svg', 'Tailwind CSS'),
    typescript: brand('typescript.svg', 'TypeScript'),
    vercel: brand('vercel.svg', 'Vercel'),
    vitepress: brand('vitepress.svg', 'VitePress'),
}

export const projectIconGroups = [
    {
        id: 'platforms',
        label: 'Platforms',
        Icon: Smartphone,
        keys: ['apple', 'android', 'finder', 'microsoft', 'linux'],
    },
    {
        id: 'built',
        label: 'Built',
        Icon: Wrench,
        keys: ['flutter', 'react', 'swift', 'vitepress', 'fastapi'],
    },
    {
        id: 'stack',
        label: 'Stack',
        Icon: Layers,
        keys: ['dart', 'typescript', 'python', 'tailwindcss', 'supabase', 'convex', 'vercel'],
    },
]

export const projectIconGroupsById = Object.fromEntries(
    projectIconGroups.map((group) => [group.id, group])
)
