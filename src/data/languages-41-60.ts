import { ProgrammingLanguage } from '../types';

export const languages41To60: ProgrammingLanguage[] = [
  {
    name: 'Smalltalk',
    description: 'One of the first pure object-oriented programming languages.',
    code: `Transcript show: 'Hello, World!'; cr.`,
    environment: 'Smalltalk environment',
    command: 'gst program.st',
    type: 'Interpreted',
    rank: 41,
    syntax: `
"Variable declaration"
| x name isValid |
x := 42.
name := 'Smalltalk'.
isValid := true.

"Methods"
greet: aName
    ^'Hello, ', aName

"Classes"
Object subclass: #Person [
    | name |
    name: aString [
        name := aString
    ]
]`
  },
  {
    name: 'D',
    description: 'A systems programming language with C-like syntax and static typing.',
    code: `import std.stdio;
void main() {
    writeln("Hello, World!");
}`,
    environment: 'D compiler',
    command: 'dmd program.d',
    type: 'Compiled',
    rank: 42,
    syntax: `
// Variable declaration
int x = 42;
string name = "D";
bool isValid = true;

// Functions
string greet(string name) {
    return "Hello, " ~ name;
}

// Classes
class Person {
    private string name;
    this(string name) {
        this.name = name;
    }
}`
  },
  {
    name: 'Julia',
    description: 'A high-level dynamic programming language designed for numerical analysis.',
    code: `println("Hello, World!")`,
    environment: 'Julia interpreter',
    command: 'julia program.jl',
    type: 'Just-in-time compiled',
    rank: 43,
    syntax: `
# Variable declaration
x = 42
name = "Julia"
is_valid = true

# Functions
function greet(name::String)
    return "Hello, $name"
end

# Structures
struct Person
    name::String
end`
  },
  {
    name: 'Logo',
    description: 'An educational programming language known for turtle graphics.',
    code: `print [Hello, World!]`,
    environment: 'Logo interpreter',
    command: 'logo program.logo',
    type: 'Interpreted',
    rank: 44,
    syntax: `
; Variable declaration
make "x 42
make "name "Logo
make "isValid "true

; Procedures
to greet :name
  output (word "Hello, :name)
end

; Basic turtle commands
to square :size
  repeat 4 [
    forward :size
    right 90
  ]
end`
  },
  {
    name: 'APL',
    description: 'Array programming language with unique mathematical notation.',
    code: `'Hello, World!'⎕`,
    environment: 'APL interpreter',
    command: 'apl program.apl',
    type: 'Interpreted',
    rank: 45,
    syntax: `
⍝ Variable assignment
x←42
name←'APL'
isValid←1

⍝ Functions
greet←{
  'Hello, ',⍵
}

⍝ Array operations
+/⍳10  ⍝ Sum of first 10 numbers`
  },
  {
    name: 'Forth',
    description: 'A stack-based programming language.',
    code: `.( Hello, World!) CR`,
    environment: 'Forth interpreter',
    command: 'gforth program.fs',
    type: 'Interpreted',
    rank: 46,
    syntax: `
\ Variable declaration
42 CONSTANT x
: name S" Forth" ;
VARIABLE isValid
TRUE isValid !

\ Words (functions)
: greet ( addr u -- addr u )
    S" Hello, " ROT ROT
    CONCATENATE ;

\ Stack manipulation
: swap ( n1 n2 -- n2 n1 )
    SWAP ;`
  },
  {
    name: 'ABAP',
    description: 'A high-level programming language created by SAP.',
    code: `WRITE: 'Hello, World!'.`,
    environment: 'SAP NetWeaver',
    command: 'N/A (SAP system required)',
    type: 'Interpreted',
    rank: 47,
    syntax: `
* Variable declaration
DATA: lv_x      TYPE i VALUE 42,
      lv_name   TYPE string VALUE 'ABAP',
      lv_valid  TYPE abap_bool VALUE abap_true.

* Methods
METHODS greet
  IMPORTING
    iv_name TYPE string
  RETURNING
    VALUE(rv_greeting) TYPE string.

* Classes
CLASS lcl_person DEFINITION.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        iv_name TYPE string.
ENDCLASS.`
  },
  {
    name: 'Alice',
    description: 'An educational programming language to teach object-oriented programming.',
    code: `System.out.println("Hello, World!");`,
    environment: 'Alice environment',
    command: 'alice program.a',
    type: 'Interpreted',
    rank: 48,
    syntax: `
// Variable declaration
Number x = 42
String name = "Alice"
Boolean isValid = true

// Methods
method greet(name: String) -> String {
    return "Hello, " + name
}

// Classes
class Person {
    property name: String
    
    constructor(name: String) {
        this.name = name
    }
}`
  },
  {
    name: 'Apex',
    description: 'A strongly typed, object-oriented programming language for Salesforce.',
    code: `System.debug('Hello, World!');`,
    environment: 'Salesforce Platform',
    command: 'N/A (Salesforce platform required)',
    type: 'Compiled',
    rank: 49,
    syntax: `
// Variable declaration
Integer x = 42;
String name = 'Apex';
Boolean isValid = true;

// Methods
public String greet(String name) {
    return 'Hello, ' + name;
}

// Classes
public class Person {
    private String name;
    
    public Person(String name) {
        this.name = name;
    }
}`
  },
  {
    name: 'Standard ML',
    description: 'A general-purpose functional programming language.',
    code: `print "Hello, World!\n";`,
    environment: 'SML interpreter',
    command: 'sml program.sml',
    type: 'Compiled',
    rank: 50,
    syntax: `
(* Variable declaration *)
val x = 42;
val name = "SML";
val isValid = true;

(* Functions *)
fun greet name =
    "Hello, " ^ name;

(* Data types *)
datatype person = Person of string;
val person = Person "John";`
  },
  {
    name: 'Scratch',
    description: 'A visual programming language designed for teaching programming concepts.',
    code: `when green flag clicked
say [Hello, World!]`,
    environment: 'Scratch IDE',
    command: 'N/A (Web-based)',
    type: 'Visual',
    rank: 51,
    syntax: `
// Blocks structure
when green flag clicked
set [x] to (42)
set [name] to [Scratch]
set [isValid] to <true>

define greet (name)
    say (join [Hello, ] (name))

// Sprite scripting
when this sprite clicked
move (10) steps
turn right (90) degrees`
  },
  {
    name: 'Dart',
    description: 'A programming language for building web, server, and mobile applications.',
    code: `void main() {
  print('Hello, World!');
}`,
    environment: 'Dart SDK',
    command: 'dart run program.dart',
    type: 'Compiled',
    rank: 52,
    syntax: `
// Variable declaration
var x = 42;
String name = 'Dart';
bool isValid = true;

// Functions
String greet(String name) {
  return 'Hello, $name';
}

// Classes
class Person {
  String name;
  
  Person(this.name);
}`
  },
  {
    name: 'RPG',
    description: 'A high-level programming language for business applications.',
    code: `DSPLY 'Hello, World!'`,
    environment: 'IBM i',
    command: 'CRTBNDRPG',
    type: 'Compiled',
    rank: 53,
    syntax: `
// Variable declaration
DCL-S x INT(10) INZ(42);
DCL-S name CHAR(10) INZ('RPG');
DCL-S isValid IND INZ(*ON);

// Procedures
DCL-PROC greet;
  DCL-PI *N VARCHAR(50);
    name VARCHAR(20) CONST;
  END-PI;
  RETURN 'Hello, ' + name;
END-PROC;`
  },
  {
    name: 'VHDL',
    description: 'Hardware description language used in electronic design automation.',
    code: `library IEEE;
use IEEE.std_logic_1164.all;
entity hello is
end hello;`,
    environment: 'VHDL simulator',
    command: 'ghdl -a program.vhd',
    type: 'Hardware Description',
    rank: 54,
    syntax: `
-- Signal declaration
SIGNAL x : integer := 42;
SIGNAL name : string := "VHDL";
SIGNAL valid : boolean := true;

-- Process
PROCESS(clk)
BEGIN
  IF rising_edge(clk) THEN
    output <= input;
  END IF;
END PROCESS;

-- Entity
ENTITY counter IS
  PORT (
    clk : IN std_logic;
    count : OUT integer
  );
END counter;`
  },
  {
    name: 'LabVIEW',
    description: 'A visual programming language for instrument control and automation.',
    code: `Display "Hello, World!"`,
    environment: 'LabVIEW Development System',
    command: 'N/A (Graphical)',
    type: 'Visual',
    rank: 55,
    syntax: `
// Controls and Indicators
Numeric Control (32-bit integer)
String Control
Boolean Control

// Structures
While Loop
For Loop
Case Structure

// SubVIs
Create SubVI
Configure Connector Pane
Create Icon`
  },
  {
    name: 'Elixir',
    description: 'A functional programming language built on top of the Erlang VM.',
    code: `IO.puts "Hello, World!"`,
    environment: 'Erlang VM',
    command: 'elixir program.exs',
    type: 'Compiled',
    rank: 56,
    syntax: `
# Variable binding
x = 42
name = "Elixir"
is_valid = true

# Functions
def greet(name) do
  "Hello, #{name}"
end

# Modules
defmodule Person do
  defstruct name: ""
  
  def new(name) do
    %Person{name: name}
  end
end`
  },
  {
    name: 'Nim',
    description: 'A statically typed compiled systems programming language.',
    code: `echo "Hello, World!"`,
    environment: 'Nim compiler',
    command: 'nim c program.nim',
    type: 'Compiled',
    rank: 57,
    syntax: `
# Variable declaration
var x = 42
let name = "Nim"
var isValid = true

# Procedures
proc greet(name: string): string =
  "Hello, " & name

# Types
type
  Person = object
    name: string

var person = Person(name: "John")`
  },
  {
    name: 'OCaml',
    description: 'A general-purpose programming language supporting functional, imperative, and object-oriented styles.',
    code: `print_endline "Hello, World!";;`,
    environment: 'OCaml compiler',
    command: 'ocamlc program.ml',
    type: 'Compiled',
    rank: 58,
    syntax: `
(* Variable declaration *)
let x = 42;;
let name = "OCaml";;
let is_valid = true;;

(* Functions *)
let greet name =
  "Hello, " ^ name;;

(* Modules *)
module Person = struct
  type t = { name : string }
  let create name = { name = name }
end;;`
  },
  {
    name: 'Crystal',
    description: 'A programming language with Ruby-like syntax and static type checking.',
    code: `puts "Hello, World!"`,
    environment: 'Crystal compiler',
    command: 'crystal build program.cr',
    type: 'Compiled',
    rank: 59,
    syntax: `
# Variable declaration
x = 42
name = "Crystal"
is_valid = true

# Methods
def greet(name : String)
  "Hello, #{name}"
end

# Classes
class Person
  property name : String
  
  def initialize(@name)
  end
end`
  },
  {
    name: 'Alice ML',
    description: 'A functional programming language based on Standard ML.',
    code: `TextIO.print "Hello, World!\n"`,
    environment: 'Alice ML system',
    command: 'alicec program.aml',
    type: 'Compiled',
    rank: 60,
    syntax: `
(* Variable declaration *)
val x = 42
val name = "Alice ML"
val isValid = true

(* Functions *)
fun greet name =
    "Hello, " ^ name

(* Signatures *)
signature PERSON =
sig
    type person
    val create : string -> person
end`
  }
];