import { ProgrammingLanguage } from '../types';

export const languages61To80: ProgrammingLanguage[] = [
  {
    name: 'VHDL',
    description: 'A hardware description language used in electronic design automation.',
    code: `entity AND_gate is
    port (A, B: in bit; Y: out bit);
end entity AND_gate;`,
    environment: 'VHDL Simulator',
    command: 'ghdl -a file.vhdl',
    type: 'Compiled',
    rank: 61,
    syntax: `
-- Entity declaration
entity and_gate is
    port (
        a, b: in bit;
        c: out bit
    );
end entity and_gate;

-- Architecture
architecture behavioral of and_gate is
begin
    c <= a and b;
end architecture behavioral;`
  },
  {
    name: 'Prolog',
    description: 'A logic programming language used for artificial intelligence and computational linguistics.',
    code: `parent(john, mary).
parent(mary, ann).`,
    environment: 'SWI-Prolog',
    command: 'swipl program.pl',
    type: 'Interpreted',
    rank: 62,
    syntax: `
% Facts
parent(john, mary).
parent(mary, ann).

% Rules
grandparent(X, Z) :- 
    parent(X, Y),
    parent(Y, Z).

% Query
?- grandparent(john, ann).`
  },
  {
    name: 'Scheme',
    description: 'A dialect of Lisp that emphasizes simplicity and clean design.',
    code: `(display "Hello, World!")
(newline)`,
    environment: 'MIT Scheme, Racket',
    command: 'scheme < script.scm',
    type: 'Interpreted',
    rank: 63,
    syntax: `
;; Function definition
(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

;; List operations
(define lst '(1 2 3 4 5))
(car lst)    ; First element
(cdr lst)    ; Rest of the list`
  },
  {
    name: 'Ada',
    description: 'A structured, statically typed programming language designed for reliability and safety.',
    code: `with Ada.Text_IO;
procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello, World!");
end Hello;`,
    environment: 'GNAT Compiler',
    command: 'gnatmake program.adb',
    type: 'Compiled',
    rank: 64,
    syntax: `
-- Package specification
package Calculator is
   type Operator is (Add, Subtract, Multiply, Divide);
   function Calculate(Left, Right: Float; Op: Operator) return Float;
end Calculator;

-- Package body
package body Calculator is
   function Calculate(Left, Right: Float; Op: Operator) return Float is
   begin
      case Op is
         when Add      => return Left + Right;
         when Subtract => return Left - Right;
         when Multiply => return Left * Right;
         when Divide   => return Left / Right;
      end case;
   end Calculate;
end Calculator;`
  },
  {
    name: 'Logo',
    description: 'An educational programming language designed for constructive learning.',
    code: `forward 100
right 90`,
    environment: 'UCBLogo, NetLogo',
    command: 'logo script.logo',
    type: 'Interpreted',
    rank: 65,
    syntax: `
TO SQUARE :size
  REPEAT 4 [
    FORWARD :size
    RIGHT 90
  ]
END

TO FLOWER
  REPEAT 36 [
    RIGHT 10
    SQUARE 50
  ]
END`
  },
  {
    name: 'COBOL',
    description: 'A business-oriented programming language primarily used in enterprise and legacy systems.',
    code: `DISPLAY "Hello, World!"`,
    environment: 'GnuCOBOL',
    command: 'cobc -x program.cob',
    type: 'Compiled',
    rank: 66,
    syntax: `
IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
ENVIRONMENT DIVISION.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 GREETING PIC A(12) VALUE "HELLO WORLD!".
PROCEDURE DIVISION.
    DISPLAY GREETING
    STOP RUN.`
  },
  {
    name: 'RPG',
    description: 'A high-level programming language for business applications.',
    code: `DCALC            PR             15P 5
D NUM1                           15P 5 VALUE
D NUM2                           15P 5 VALUE`,
    environment: 'IBM i',
    command: 'CRTBNDRPG',
    type: 'Compiled',
    rank: 67,
    syntax: `
     FMYFILE  IF   E           K DISK
     D NAME           S             20A
     D AGE            S              3P 0
     C     *ENTRY    PLIST
     C                PARM           NAME
     C     NAME      IFNE      *BLANK
     C                MOVE      '0'         AGE
     C                ENDIF
     C                SETON                                        LR`
  },
  {
    name: 'Modula-2',
    description: 'A successor to Pascal emphasizing modularity and separate compilation.',
    code: `MODULE Hello;
FROM InOut IMPORT WriteString;
BEGIN
  WriteString("Hello, World!");
END Hello.`,
    environment: 'GNU Modula-2',
    command: 'gm2 program.mod',
    type: 'Compiled',
    rank: 68,
    syntax: `
MODULE Hello;
FROM InOut IMPORT WriteLn, WriteString;

BEGIN
   WriteString("Hello, World!");
   WriteLn;
END Hello.`
  },
  {
    name: 'Dylan',
    description: 'An object-oriented dynamic language that was designed for performance.',
    code: `format-out("Hello, World!")`,
    environment: 'Open Dylan',
    command: 'dylan-compiler program.dylan',
    type: 'Compiled',
    rank: 69,
    syntax: `
define method factorial (n :: <integer>) => (result :: <integer>)
  if (n = 0)
    1
  else
    n * factorial(n - 1)
  end if;
end method factorial;

define class <person> (<object>)
  slot name :: <string>, required-init-keyword: name:;
  slot age :: <integer>, required-init-keyword: age:;
end class;`
  },
  {
    name: 'Smalltalk',
    description: 'One of the first pure object-oriented programming languages.',
    code: `Transcript show: 'Hello, World!'`,
    environment: 'Squeak, Pharo',
    command: 'squeak image.image',
    type: 'Interpreted',
    rank: 70,
    syntax: `
Object subclass: #Person
    instanceVariableNames: 'name age'
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Examples'

!Person methodsFor: 'accessing'
name
    ^name

age
    ^age

greet
    ^'Hello, I am ', name, '!'`
  },
  {
    name: 'Racket',
    description: 'A general-purpose programming language in the Lisp/Scheme family.',
    code: `#lang racket
(displayln "Hello, World!")`,
    environment: 'Racket',
    command: 'racket program.rkt',
    type: 'Interpreted',
    rank: 71,
    syntax: `
#lang racket

(define (factorial n)
  (if (zero? n)
      1
      (* n (factorial (- n 1)))))

(define (quicksort lst)
  (cond
    [(empty? lst) '()]
    [else
     (let ([pivot (first lst)])
       (append
        (quicksort (filter (λ (x) (< x pivot)) (rest lst)))
        (list pivot)
        (quicksort (filter (λ (x) (>= x pivot)) (rest lst)))))])))`
  },
  {
    name: 'Haxe',
    description: 'A modern high-level multiplatform programming language.',
    code: `class Main {
    static function main() {
        trace("Hello, World!");
    }
}`,
    environment: 'Haxe Compiler',
    command: 'haxe compile.hxml',
    type: 'Compiled',
    rank: 72,
    syntax: `
class Example {
    private var name:String;
    
    public function new(name:String) {
        this.name = name;
    }
    
    public function greet():String {
        return "Hello, " + name + "!";
    }
    
    static public function main() {
        var example = new Example("Haxe");
        trace(example.greet());
    }
}`
  },
  {
    name: 'Fortran',
    description: 'One of the oldest programming languages, primarily used for scientific computing.',
    code: `program hello
  print *, "Hello, World!"
end program hello`,
    environment: 'GNU Fortran',
    command: 'gfortran program.f90',
    type: 'Compiled',
    rank: 73,
    syntax: `
program hello
    implicit none
    real :: a, b, result
    
    a = 5.0
    b = 3.0
    result = add_numbers(a, b)
    print *, "Sum is:", result
    
contains
    function add_numbers(x, y) result(sum)
        real, intent(in) :: x, y
        real :: sum
        sum = x + y
    end function add_numbers
end program hello`
  },
  {
    name: 'APL',
    description: 'An array programming language known for its unique mathematical notation.',
    code: `'Hello, World!'`,
    environment: 'Dyalog APL',
    command: 'dyalog script.apl',
    type: 'Interpreted',
    rank: 74,
    syntax: `
⍝ Function to calculate factorial
fact ← {
    ⍵≤1: 1
    ⍵×∇ ⍵-1
}

⍝ Array operations
sum ← +/
average ← {(+/⍵)÷⍴⍵}
sort ← {⍵[⍋⍵]}`
  },
  {
    name: 'Tcl',
    description: 'A dynamic, interpreted programming language suited for scripting and rapid prototyping.',
    code: `puts "Hello, World!"`,
    environment: 'Tcl/Tk',
    command: 'tclsh script.tcl',
    type: 'Interpreted',
    rank: 75,
    syntax: `
# Procedure definition
proc factorial {n} {
    if {$n <= 1} {
        return 1
    } else {
        return [expr {$n * [factorial [expr {$n - 1}]]}]
    }
}

# Object-oriented programming
oo::class create Person {
    variable name age
    
    constructor {nm ag} {
        set name $nm
        set age $ag
    }
    
    method greet {} {
        return "Hello, I am $name!"
    }
}`
  },
  {
    name: 'Common Lisp',
    description: 'A dialect of the Lisp programming language, supporting multiple programming paradigms.',
    code: `(format t "Hello, World!")`,
    environment: 'SBCL, CLISP',
    command: 'sbcl --script program.lisp',
    type: 'Interpreted',
    rank: 76,
    syntax: `
;; Function definition
(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

;; Object system
(defclass person ()
  ((name :accessor person-name
         :initarg :name)
   (age :accessor person-age
        :initarg :age)))

(defmethod greet ((p person))
  (format nil "Hello, I am ~a!" (person-name p)))`
  },
  {
    name: 'D',
    description: 'A systems programming language with C-like syntax and modern features.',
    code: `import std.stdio;
void main() {
    writeln("Hello, World!");
}`,
    environment: 'DMD Compiler',
    command: 'dmd program.d',
    type: 'Compiled',
    rank: 77,
    syntax: `
import std.stdio;

class Person {
    private string name;
    
    this(string name) {
        this.name = name;
    }
    
    void greet() {
        writeln("Hello, ", name, "!");
    }
}

void main() {
    auto person = new Person("D");
    person.greet();
}`
  },
  {
    name: 'ActionScript',
    description: 'An object-oriented programming language originally designed for Flash applications.',
    code: `trace("Hello, World!");`,
    environment: 'Flash/AIR',
    command: 'mxmlc program.as',
    type: 'Compiled',
    rank: 78,
    syntax: `
package {
    import flash.display.Sprite;
    
    public class Example extends Sprite {
        private var name:String;
        
        public function Example() {
            name = "ActionScript";
            trace(greet());
        }
        
        private function greet():String {
            return "Hello, " + name + "!";
        }
    }
}`
  },
  {
    name: 'Erlang',
    description: 'A functional programming language designed for building scalable distributed systems.',
    code: `io:format("Hello, World!~n").`,
    environment: 'Erlang Runtime System',
    command: 'erl -noshell -s program',
    type: 'Interpreted',
    rank: 79,
    syntax: `
-module(example).
-export([factorial/1, greet/1]).

% Factorial function
factorial(0) -> 1;
factorial(N) when N > 0 ->
    N * factorial(N-1).

% Message passing
greet(Name) ->
    spawn(fun() ->
        receive
            hello -> io:format("Hello, ~s!~n", [Name])
        end
    end).`
  },
  {
    name: 'CoffeeScript',
    description: 'A programming language that transcompiles to JavaScript with simplified syntax.',
    code: `console.log "Hello, World!"`,
    environment: 'Node.js',
    command: 'coffee script.coffee',
    type: 'Transpiled',
    rank: 80,
    syntax: `
# Class definition
class Person
  constructor: (@name) ->
  
  greet: ->
    "Hello, #{@name}!"

# Function with default parameters
add = (a, b = 2) ->
  a + b

# List comprehension
squares = (x * x for x in [1..10])`
  }
];