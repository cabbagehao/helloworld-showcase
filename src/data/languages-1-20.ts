import { ProgrammingLanguage } from '../types';

export const languages1To20: ProgrammingLanguage[] = [
  {
    name: 'Python',
    description: 'A high-level, interpreted programming language known for its simplicity and readability.',
    code: `print("Hello, World!")`,
    environment: 'Python 3.x',
    command: 'python script.py',
    type: 'Interpreted',
    rank: 1,
    syntax: `
# Variable declaration
x = 42
name = "Python"
is_valid = True

# Conditional statement
if x > 0:
    print("Positive")
else:
    print("Non-positive")

# Loop
for i in range(5):
    print(i)

# Function definition
def greet(name):
    return f"Hello, {name}"

# Class definition
class Person:
    def __init__(self, name):
        self.name = name
    def say_hello(self):
        print(f"Hello, I'm {self.name}")
`
  },
  {
    name: 'Java',
    description: 'A versatile, object-oriented language designed for platform independence.',
    code: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    environment: 'JDK (Java Development Kit)',
    command: 'javac HelloWorld.java && java HelloWorld',
    type: 'Hybrid',
    rank: 2,
    syntax: `
// Variable declaration
int x = 42;
String name = "Java";
boolean isValid = true;

// Conditional statement
if (x > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Non-positive");
}

// Loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Method definition
public String greet(String name) {
    return "Hello, " + name;
}

// Class definition
public class Person {
    private String name;
    
    public Person(String name) {
        this.name = name;
    }
    
    public void sayHello() {
        System.out.println("Hello, I'm " + name);
    }
}
`
  },
  {
    name: 'JavaScript',
    description: 'A dynamic programming language primarily used for web development.',
    code: `console.log("Hello, World!");`,
    environment: 'Web browser or Node.js',
    command: 'node script.js',
    type: 'Interpreted',
    rank: 3,
    syntax: `
// Variable declaration
let x = 42;
const name = "JavaScript";
let isValid = true;

// Conditional statement
if (x > 0) {
    console.log("Positive");
} else {
    console.log("Non-positive");
}

// Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Function definition
function greet(name) {
    return \`Hello, \${name}\`;
}

// Class definition
class Person {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
}
`
  },
  {
    name: 'C++',
    description: 'An extension of C that adds object-oriented features and other improvements.',
    code: `
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    environment: 'G++ or any C++ compiler',
    command: 'g++ program.cpp && ./a.out',
    type: 'Compiled',
    rank: 4,
    syntax: `
// Variable declaration
int x = 42;
string name = "C++";
bool isValid = true;

// Conditional statement
if (x > 0) {
    cout << "Positive" << endl;
} else {
    cout << "Non-positive" << endl;
}

// Loop
for (int i = 0; i < 5; i++) {
    cout << i << endl;
}

// Function definition
string greet(string name) {
    return "Hello, " + name;
}

// Class definition
class Person {
private:
    string name;
public:
    Person(string n) : name(n) {}
    void sayHello() {
        cout << "Hello, I'm " << name << endl;
    }
};
`
  },
  {
    name: 'C',
    description: 'A general-purpose programming language that influenced many modern languages.',
    code: `
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    environment: 'GCC or any C compiler',
    command: 'gcc program.c && ./a.out',
    type: 'Compiled',
    rank: 5,
    syntax: `
// Variable declaration
int x = 42;
char name[] = "C";
int isValid = 1;

// Conditional statement
if (x > 0) {
    printf("Positive\\n");
} else {
    printf("Non-positive\\n");
}

// Loop
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}

// Function definition
void greet(char* name) {
    printf("Hello, %s\\n", name);
}

// Struct definition
struct Person {
    char name[50];
};

void Person_sayHello(struct Person* p) {
    printf("Hello, I'm %s\\n", p->name);
}
`
  },
  {
    name: 'C#',
    description: 'A modern, object-oriented language developed by Microsoft.',
    code: `
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    environment: '.NET Framework or .NET Core',
    command: 'dotnet run',
    type: 'Compiled',
    rank: 6,
    syntax: `
// Variable declaration
int x = 42;
string name = "C#";
bool isValid = true;

// Conditional statement
if (x > 0)
{
    Console.WriteLine("Positive");
}
else
{
    Console.WriteLine("Non-positive");
}

// Loop
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

// Method definition
public string Greet(string name)
{
    return $"Hello, {name}";
}

// Class definition
public class Person
{
    private string name;
    
    public Person(string name)
    {
        this.name = name;
    }
    
    public void SayHello()
    {
        Console.WriteLine($"Hello, I'm {name}");
    }
}
`
  },
  {
    name: 'PHP',
    description: 'A server-side scripting language designed for web development.',
    code: `<?php echo "Hello, World!"; ?>`,
    environment: 'PHP interpreter',
    command: 'php script.php',
    type: 'Interpreted',
    rank: 7,
    syntax: `
<?php
// Variable declaration
$x = 42;
$name = "PHP";
$isValid = true;

// Conditional statement
if ($x > 0) {
    echo "Positive";
} else {
    echo "Non-positive";
}

// Loop
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// Function definition
function greet($name) {
    return "Hello, " . $name;
}

// Class definition
class Person {
    private $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function sayHello() {
        echo "Hello, I'm " . $this->name;
    }
}
?>
`
  },
  {
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
    code: `console.log("Hello, World!");`,
    environment: 'Node.js with TypeScript compiler',
    command: 'tsc script.ts && node script.js',
    type: 'Transpiled',
    rank: 8,
    syntax: `
// Variable declaration
let x: number = 42;
const name: string = "TypeScript";
let isValid: boolean = true;

// Conditional statement
if (x > 0) {
    console.log("Positive");
} else {
    console.log("Non-positive");
}

// Loop
for (let i: number = 0; i < 5; i++) {
    console.log(i);
}

// Function definition
function greet(name: string): string {
    return \`Hello, \${name}\`;
}

// Interface definition
interface PersonInterface {
    name: string;
    sayHello(): void;
}

// Class definition
class Person implements PersonInterface {
    constructor(private name: string) {}
    
    sayHello(): void {
        console.log(\`Hello, I'm \${this.name}\`);
    }
}
`
  },
  {
    name: 'Ruby',
    description: 'A dynamic, object-oriented language focused on simplicity and productivity.',
    code: `puts "Hello, World!"`,
    environment: 'Ruby interpreter',
    command: 'ruby script.rb',
    type: 'Interpreted',
    rank: 9,
    syntax: `
# Variable declaration
x = 42
name = "Ruby"
is_valid = true

# Conditional statement
if x > 0
  puts "Positive"
else
  puts "Non-positive"
end

# Loop
5.times do |i|
  puts i
end

# Function definition
def greet(name)
  "Hello, #{name}"
end

# Class definition
class Person
  def initialize(name)
    @name = name
  end
  
  def say_hello
    puts "Hello, I'm #{@name}"
  end
end
`
  },
  {
    name: 'Swift',
    description: 'A modern programming language developed by Apple for iOS and macOS development.',
    code: `print("Hello, World!")`,
    environment: 'Swift compiler',
    command: 'swift script.swift',
    type: 'Compiled',
    rank: 10,
    syntax: `
// Variable declaration
var x = 42
let name = "Swift"
var isValid = true

// Conditional statement
if x > 0 {
    print("Positive")
} else {
    print("Non-positive")
}

// Loop
for i in 0..<5 {
    print(i)
}

// Function definition
func greet(_ name: String) -> String {
    return "Hello, \\(name)"
}

// Class definition
class Person {
    private let name: String
    
    init(name: String) {
        self.name = name
    }
    
    func sayHello() {
        print("Hello, I'm \\(name)")
    }
}
`
  },
  {
    name: 'SQL',
    description: 'A domain-specific language for managing and querying relational databases.',
    code: `SELECT 'Hello, World!' AS greeting;`,
    environment: 'Any SQL database system',
    command: 'Varies by database system',
    type: 'Query Language',
    rank: 11,
    syntax: `
-- Create table
CREATE TABLE Person (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

-- Insert data
INSERT INTO Person (id, name, age)
VALUES (1, 'John', 30);

-- Select data
SELECT * FROM Person
WHERE age > 25;

-- Update data
UPDATE Person
SET age = 31
WHERE name = 'John';

-- Delete data
DELETE FROM Person
WHERE age < 25;

-- Join tables
SELECT p.name, o.order_date
FROM Person p
JOIN Orders o ON p.id = o.person_id;

-- Aggregate functions
SELECT 
    COUNT(*) as total,
    AVG(age) as avg_age
FROM Person;
`
  },
  {
    name: 'Go',
    description: 'A statically typed, compiled language designed at Google with simplicity in mind.',
    code: `
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
    environment: 'Go compiler',
    command: 'go run script.go',
    type: 'Compiled',
    rank: 12,
    syntax: `
// Variable declaration
var x int = 42
name := "Go"
var isValid bool = true

// Conditional statement
if x > 0 {
    fmt.Println("Positive")
} else {
    fmt.Println("Non-positive")
}

// Loop
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// Function definition
func greet(name string) string {
    return fmt.Sprintf("Hello, %s", name)
}

// Struct definition
type Person struct {
    name string
}

func (p Person) sayHello() {
    fmt.Printf("Hello, I'm %s\\n", p.name)
}
`
  },
  {
    name: 'Rust',
    description: 'A systems programming language focused on safety, concurrency, and performance.',
    code: `
fn main() {
    println!("Hello, World!");
}`,
    environment: 'Rust compiler',
    command: 'rustc program.rs && ./program',
    type: 'Compiled',
    rank: 13,
    syntax: `
// Variable declaration
let x: i32 = 42;
let name = "Rust";
let is_valid: bool = true;

// Conditional statement
if x > 0 {
    println!("Positive");
} else {
    println!("Non-positive");
}

// Loop
for i in 0..5 {
    println!("{}", i);
}

// Function definition
fn greet(name: &str) -> String {
    format!("Hello, {}", name)
}

// Struct definition
struct Person {
    name: String,
}

impl Person {
    fn say_hello(&self) {
        println!("Hello, I'm {}", self.name);
    }
}
`
  },
  {
    name: 'Kotlin',
    description: 'A modern programming language that runs on the JVM and can be compiled to JavaScript.',
    code: `fun main() {
    println("Hello, World!")
}`,
    environment: 'JVM with Kotlin compiler',
    command: 'kotlinc script.kt -include-runtime -d script.jar && java -jar script.jar',
    type: 'Compiled',
    rank: 14,
    syntax: `
// Variable declaration
val x = 42
var name = "Kotlin"
val isValid = true

// Conditional statement
if (x > 0) {
    println("Positive")
} else {
    println("Non-positive")
}

// Loop
for (i in 0..4) {
    println(i)
}

// Function definition
fun greet(name: String): String {
    return "Hello, $name"
}

// Class definition
class Person(private val name: String) {
    fun sayHello() {
        println("Hello, I'm $name")
    }
}
`
  },
  {
    name: 'R',
    description: 'A programming language for statistical computing and graphics.',
    code: `print("Hello, World!")`,
    environment: 'R interpreter',
    command: 'Rscript script.R',
    type: 'Interpreted',
    rank: 15,
    syntax: `
# Variable declaration
x <- 42
name <- "R"
is_valid <- TRUE

# Conditional statement
if (x > 0) {
  print("Positive")
} else {
  print("Non-positive")
}

# Loop
for (i in 1:5) {
  print(i)
}

# Function definition
greet <- function(name) {
  return(paste("Hello,", name))
}

# S3 Class definition
Person <- function(name) {
  obj <- list(name = name)
  class(obj) <- "Person"
  return(obj)
}

say_hello <- function(person) {
  print(paste("Hello, I'm", person$name))
}
`
  },
  {
    name: 'MATLAB',
    description: 'A numerical computing environment and programming language.',
    code: `disp('Hello, World!')`,
    environment: 'MATLAB',
    command: 'matlab -nodisplay -nosplash -nodesktop -r "run(\'script.m\');exit;"',
    type: 'Interpreted',
    rank: 16,
    syntax: `
% Variable declaration
x = 42;
name = 'MATLAB';
isValid = true;

% Conditional statement
if x > 0
    disp('Positive')
else
    disp('Non-positive')
end

% Loop
for i = 1:5
    disp(i)
end

% Function definition
function greeting = greet(name)
    greeting = ['Hello, ' name];
end

% Class definition
classdef Person
    properties
        name
    end
    
    methods
        function obj = Person(name)
            obj.name = name;
        end
        
        function sayHello(obj)
            disp(['Hello, I''m ' obj.name])
        end
    end
end
`
  },
  {
    name: 'Assembly',
    description: 'A low-level programming language with a strong correspondence to machine code.',
    code: `
section .data
    msg db 'Hello, World!',0xa
    len equ $ - msg

section .text
global _start
_start:
    mov edx,len
    mov ecx,msg
    mov ebx,1
    mov eax,4
    int 0x80
    
    mov eax,1
    int 0x80`,
    environment: 'NASM assembler',
    command: 'nasm -f elf64 program.asm && ld program.o && ./a.out',
    type: 'Assembled',
    rank: 17,
    syntax: `
; Variable declaration
section .data
    number dd 42
    name db 'Assembly',0
    valid db 1

; Conditional statement
    mov eax, [number]
    cmp eax, 0
    jg positive
    jmp non_positive
positive:
    ; code for positive
non_positive:
    ; code for non-positive

; Loop
    mov ecx, 5
loop_start:
    ; loop body
    dec ecx
    jnz loop_start

; Function definition
print_msg:
    push ebp
    mov ebp, esp
    ; function body
    mov esp, ebp
    pop ebp
    ret

; Data structure
struc Person
    .name: resb 32
    .age:  resd 1
endstruc
`
  },
  {
    name: 'Perl',
    description: 'A high-level, general-purpose, interpreted programming language.',
    code: `print "Hello, World!\\n";`,
    environment: 'Perl interpreter',
    command: 'perl script.pl',
    type: 'Interpreted',
    rank: 18,
    syntax: `
# Variable declaration
my $x = 42;
my $name = "Perl";
my $is_valid = 1;

# Conditional statement
if ($x > 0) {
    print "Positive\\n";
} else {
    print "Non-positive\\n";
}

# Loop
for my $i (0..4) {
    print "$i\\n";
}

# Function definition
sub greet {
    my ($name) = @_;
    return "Hello, $name";
}

# Package definition (Perl's OOP)
package Person;
sub new {
    my ($class, $name) = @_;
    return bless { name => $name }, $class;
}

sub say_hello {
    my $self = shift;
    print "Hello, I'm $self->{name}\\n";
}
`
  },
  {
    name: 'Scala',
    description: 'A programming language that combines object-oriented and functional programming.',
    code: `object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}`,
    environment: 'JVM with Scala compiler',
    command: 'scalac program.scala && scala HelloWorld',
    type: 'Compiled',
    rank: 19,
    syntax: `
// Variable declaration
val x: Int = 42
var name = "Scala"
val isValid = true

// Conditional statement
if (x > 0) {
  println("Positive")
} else {
  println("Non-positive")
}

// Loop
for (i <- 0 until 5) {
  println(i)
}

// Function definition
def greet(name: String): String = {
  s"Hello, $name"
}

// Class definition
class Person(private val name: String) {
  def sayHello(): Unit = {
    println(s"Hello, I'm $name")
  }
}

// Case class definition
case class Point(x: Int, y: Int)

// Trait definition
trait Greeting {
  def greeting: String
}
`
  },
  {
    name: 'Visual Basic',
    description: 'A programming language designed for building Windows applications.',
    code: `Module Module1
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module`,
    environment: '.NET Framework',
    command: 'vbc program.vb && program.exe',
    type: 'Compiled',
    rank: 20,
    syntax: `
' Variable declaration
Dim x As Integer = 42
Dim name As String = "Visual Basic"
Dim isValid As Boolean = True

' Conditional statement
If x > 0 Then
    Console.WriteLine("Positive")
Else
    Console.WriteLine("Non-positive")
End If

' Loop
For i As Integer = 0 To 4
    Console.WriteLine(i)
Next

' Function definition
Function Greet(name As String) As String
    Return "Hello, " & name
End Function

' Class definition
Public Class Person
    Private name As String
    
    Public Sub New(ByVal personName As String)
        name = personName
    End Sub
    
    Public Sub SayHello()
        Console.WriteLine("Hello, I'm " & name)
    End Sub
End Class
`
  }
];