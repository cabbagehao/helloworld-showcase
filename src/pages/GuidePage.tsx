import React from 'react';
import { Layout } from '../components/Layout';

export function GuidePage() {
  return (
    <Layout 
      title="Programming Language Guide"
      description="A comprehensive guide to understanding different programming languages, their types, and use cases."
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Programming Language Guide
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3>Types of Programming Languages</h3>
            <p>
              Programming languages can be categorized into several types based on their execution model and paradigm:
            </p>
            
            <h4>Compiled Languages</h4>
            <p>
              Compiled languages are converted directly to machine code and typically offer better performance. Examples include C, C++, and Rust. These languages are often used for system programming and performance-critical applications.
            </p>
            
            <h4>Interpreted Languages</h4>
            <p>
              Interpreted languages are executed by an interpreter at runtime. Examples include Python, Ruby, and JavaScript. They offer greater flexibility and easier debugging but may have slower execution speeds.
            </p>
            
            <h4>Hybrid Languages</h4>
            <p>
              Some languages use a combination of compilation and interpretation. Java and C# compile to intermediate bytecode which is then interpreted by a virtual machine.
            </p>
            
            <h3>Choosing a Programming Language</h3>
            <p>
              When selecting a programming language, consider:
            </p>
            <ul>
              <li>Project requirements and constraints</li>
              <li>Performance needs</li>
              <li>Development speed</li>
              <li>Available libraries and frameworks</li>
              <li>Community support and resources</li>
              <li>Team expertise and learning curve</li>
            </ul>
            
            <h3>Learning Resources</h3>
            <p>
              To learn a new programming language effectively:
            </p>
            <ul>
              <li>Start with basic syntax and concepts</li>
              <li>Practice with simple examples</li>
              <li>Build small projects</li>
              <li>Read documentation and tutorials</li>
              <li>Join community forums and discussions</li>
              <li>Contribute to open source projects</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}