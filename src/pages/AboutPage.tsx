import React from 'react';
import { Layout } from '../components/Layout';

export function AboutPage() {
  return (
    <Layout 
      title="About"
      description="Learn about Hello World Showcase, a comprehensive collection of programming language examples and syntax guides."
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About Hello World Showcase
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Hello World Showcase is a comprehensive resource designed to help developers explore and learn different programming languages through simple, practical examples. Our platform provides "Hello, World!" examples and basic syntax guides for over 100 programming languages, making it easier to understand the fundamentals of each language.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              Our mission is to make programming language learning accessible and straightforward. We believe that seeing how different languages handle basic operations helps developers understand their unique characteristics and choose the right tool for their projects.
            </p>
            
            <h3>Features</h3>
            <ul>
              <li>Comprehensive collection of programming languages</li>
              <li>Clear, copyable code examples</li>
              <li>Basic syntax guides for each language</li>
              <li>Language type and popularity information</li>
              <li>Easy-to-use interface with syntax highlighting</li>
              <li>Dark mode support for comfortable viewing</li>
            </ul>
            
            <h3>Why Hello World?</h3>
            <p>
              The "Hello, World!" program is traditionally used as a first example when learning a new programming language. It's simple enough to understand but reveals many important aspects of a language's syntax and structure. Our examples go beyond just printing "Hello, World!" by including basic syntax patterns and common programming constructs.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}