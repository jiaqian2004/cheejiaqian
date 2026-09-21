import './ProjectStack.css'

interface ProjectStackProps {
  stack: string[]
}

export default function ProjectStack({ stack }: ProjectStackProps) {
  return (
    <div className="project-stack">
      {stack.map((tech) => (
        <span className="skill-tag" key={tech}>
          {tech}
        </span>
      ))}
    </div>
  )
}
