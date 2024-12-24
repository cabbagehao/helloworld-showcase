import { ProgrammingLanguage } from '../types';

export const languages81To100: ProgrammingLanguage[] = [
  {
    name: 'Pascal',
    description: 'A procedural programming language designed for teaching and development.',
    code: `program Hello;
begin
  writeln('Hello, World!');
end.`,
    environment: 'Free Pascal',
    command: 'fpc program.pas',
    type: 'Compiled',
    rank: 81,
    syntax: `
program Example;
var
  x, y: Integer;
  name: String;

function Add(a, b: Integer): Integer;
begin
  Add := a + b;
end;

begin
  x := 5;
  y := 3;
  writeln(Add(x, y));
end.`
  },
  {
    name: 'Forth',
    description: 'A stack-based programming language emphasizing simplicity and extensibility.',
    code: `." Hello, World!" CR`,
    environment: 'Gforth',
    command: 'gforth program.fs',
    type: 'Interpreted',
    rank: 82,
    syntax: `
: SQUARE ( n -- n^2 )
  DUP * ;

: FACTORIAL ( n -- n! )
  DUP 0= IF
    DROP 1
  ELSE
    DUP 1- RECURSE *
  THEN ;`
  },
  {
    name: 'Eiffel',
    description: 'An object-oriented programming language designed for building reliable software.',
    code: `class
    HELLO_WORLD
create
    make
feature
    make
        do
            print ("Hello, World!%N")
        end
end`,
    environment: 'EiffelStudio',
    command: 'ec program.e',
    type: 'Compiled',
    rank: 83,
    syntax: `
class
    PERSON
create
    make
feature
    name: STRING
    age: INTEGER
    
    make (n: STRING; a: INTEGER)
        do
            name := n
            age := a
        end
        
    greet: STRING
        do
            Result := "Hello, " + name
        end
end`
  },
  {
    name: 'ML',
    description: 'A family of functional programming languages known for their type systems.',
    code: `print "Hello, World!\n";`,
    environment: 'Standard ML of New Jersey',
    command: 'sml program.sml',
    type: 'Interpreted',
    rank: 84,
    syntax: `
fun factorial 0 = 1
  | factorial n = n * factorial(n-1)

datatype 'a tree = Leaf of 'a 
                 | Node of 'a tree * 'a * 'a tree

fun sum [] = 0
  | sum (x::xs) = x + sum xs`
  },
  {
    name: 'ABC',
    description: 'A programming language and environment designed for teaching and prototyping.',
    code: `WRITE "Hello, World!"`,
    environment: 'ABC Interpreter',
    command: 'abc program.abc',
    type: 'Interpreted',
    rank: 85,
    syntax: `
HOW TO RETURN factorial n:
   PUT 1 IN result
   FOR i IN {1..n}:
      PUT result * i IN result
   RETURN result

HOW TO DISPLAY list:
   FOR item IN list:
      WRITE item
   WRITE newline`
  },
  {
    name: 'OCaml',
    description: 'A multi-paradigm programming language with support for functional, imperative, and object-oriented styles.',
    code: `print_endline "Hello, World!";;`,
    environment: 'OCaml',
    command: 'ocaml program.ml',
    type: 'Compiled',
    rank: 86,
    syntax: `
(* Function definition *)
let rec factorial n =
  if n <= 1 then 1
  else n * factorial (n - 1);;

(* Pattern matching *)
type shape =
  | Circle of float
  | Rectangle of float * float;;

let area = function
  | Circle r -> 3.14159 *. r *. r
  | Rectangle (w, h) -> w *. h;;`
  },
  {
    name: 'Io',
    description: 'A pure object-oriented programming language inspired by Smalltalk, Self, and Lua.',
    code: `"Hello, World!" println`,
    environment: 'Io Language',
    command: 'io program.io',
    type: 'Interpreted',
    rank: 87,
    syntax: `
// Object creation
Person := Object clone
Person name ::= nil
Person age ::= nil

Person greet := method(
    ("Hello, " .. name) println
)

// Method calls
john := Person clone setName("John") setAge(30)
john greet`
  },
  {
    name: 'Icon',
    description: 'A high-level programming language featuring string processing and goal-directed evaluation.',
    code: `procedure main()
    write("Hello, World!")
end`,
    environment: 'Icon Compiler',
    command: 'icont program.icn',
    type: 'Compiled',
    rank: 88,
    syntax: `
procedure reverse(s)
    return if *s = 0 then ""
    else reverse(s[2:0]) || s[1]
end

procedure fibonacci(n)
    return if n <= 2 then 1
    else fibonacci(n-1) + fibonacci(n-2)
end`
  },
  {
    name: 'REXX',
    description: 'A structured high-level programming language designed for ease of learning and reading.',
    code: `say 'Hello, World!'`,
    environment: 'Regina REXX',
    command: 'rexx program.rexx',
    type: 'Interpreted',
    rank: 89,
    syntax: `
/* Function definition */
factorial: procedure
  parse arg n
  if n <= 1 then return 1
  return n * factorial(n-1)

/* String manipulation */
say reverse('Hello')
exit`
  },
  {
    name: 'Oberon',
    description: 'A programming language designed as a successor to Pascal with emphasis on modularity.',
    code: `MODULE Hello;
    IMPORT Out;
BEGIN
    Out.String("Hello, World!");
END Hello.`,
    environment: 'Oberon System',
    command: 'obc program.ob',
    type: 'Compiled',
    rank: 90,
    syntax: `
MODULE Example;
    IMPORT Out;
    
    TYPE
        Person = RECORD
            name: ARRAY 32 OF CHAR;
            age: INTEGER
        END;
    
    PROCEDURE Greet(p: Person);
    BEGIN
        Out.String("Hello, "); 
        Out.String(p.name)
    END Greet;
END Example.`
  },
  {
    name: 'S',
    description: 'A programming language for statistical computing and data analysis.',
    code: `cat("Hello, World!\n")`,
    environment: 'S-PLUS',
    command: 'Splus < program.s',
    type: 'Interpreted',
    rank: 91,
    syntax: `
# Function definition
mean.and.sd <- function(x) {
    mean <- mean(x)
    sd <- sd(x)
    return(list(mean=mean, sd=sd))
}

# Data manipulation
data <- c(1,2,3,4,5)
result <- mean.and.sd(data)`
  },
  {
    name: 'Mercury',
    description: 'A pure logic programming language with static types and modes.',
    code: `:- module hello.
:- interface.
:- import_module io.
:- pred main(io::di, io::uo) is det.
:- implementation.
main(!IO) :- io.write_string("Hello, World!\n", !IO).`,
    environment: 'Mercury Compiler',
    command: 'mmc program.m',
    type: 'Compiled',
    rank: 92,
    syntax: `
:- module factorial.
:- interface.
:- pred factorial(int::in, int::out) is det.
:- implementation.
factorial(N, F) :-
    ( N =< 1 ->
        F = 1
    ;
        N1 = N - 1,
        factorial(N1, F1),
        F = N * F1
    ).`
  },
  {
    name: 'Sather',
    description: 'An object-oriented language designed to be simple, efficient, safe, and non-proprietary.',
    code: `class HELLO is
    main is
        #OUT + "Hello, World!\n";
    end;
end;`,
    environment: 'Sather Compiler',
    command: 'sacomp program.sa',
    type: 'Compiled',
    rank: 93,
    syntax: `
class POINT is
    attr x,y: REAL;
    
    create(a,b: REAL): POINT is
        res := new;
        res.x := a;
        res.y := b;
        return res;
    end;
    
    distance(other: POINT): REAL is
        return ((x - other.x).pow(2) + 
                (y - other.y).pow(2)).sqrt;
    end;
end;`
  },
  {
    name: 'Alice',
    description: 'An educational programming language based on Standard ML, designed for teaching programming concepts.',
    code: `TextIO.print "Hello, World!\n"`,
    environment: 'Alice ML',
    command: 'alicec program.aml',
    type: 'Interpreted',
    rank: 94,
    syntax: `
fun factorial 0 = 1
  | factorial n = n * factorial (n-1)

datatype 'a tree = Leaf of 'a 
                 | Node of 'a tree * 'a * 'a tree

fun treeSum (Leaf n) = n
  | treeSum (Node(l,n,r)) = treeSum l + n + treeSum r`
  },
  {
    name: 'Clean',
    description: 'A general-purpose purely functional computer programming language.',
    code: `module hello
Start = "Hello, World!\n"`,
    environment: 'Clean System',
    command: 'clm program.icl',
    type: 'Compiled',
    rank: 95,
    syntax: `
module example
import StdEnv

factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n-1)

:: Tree a = Node a [Tree a]

sum :: [Int] -> Int
sum [] = 0
sum [x:xs] = x + sum xs`
  },
  {
    name: 'Curry',
    description: 'A functional logic programming language combining functional programming with logic programming.',
    code: `main = putStrLn "Hello, World!"`,
    environment: 'PAKCS',
    command: 'pakcs program.curry',
    type: 'Interpreted',
    rank: 96,
    syntax: `
-- Function definition
factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n-1)

-- Logic programming
parent "John" "Mary"
parent "Mary" "Ann"

grandparent x z = parent x y & parent y z`
  },
  {
    name: 'Occam',
    description: 'A concurrent programming language designed for parallel processing.',
    code: `PROC main ()
  WRITE ("Hello, World!*c")
:`,
    environment: 'Kent Retargetable Occam Compiler',
    command: 'kroc program.occ',
    type: 'Compiled',
    rank: 97,
    syntax: `
PROC buffer (CHAN OF INT in, out)
  INT x:
  WHILE TRUE
    SEQ
      in ? x
      out ! x
:

PROC parallel.example ()
  CHAN OF INT a, b:
  PAR
    producer (a)
    buffer (a, b)
    consumer (b)
:`
  },
  {
    name: 'Miranda',
    description: 'A pure functional programming language designed for teaching and research.',
    code: `main = putstr "Hello, World!\n"`,
    environment: 'Miranda System',
    command: 'miranda program.m',
    type: 'Interpreted',
    rank: 98,
    syntax: `
|| Function definition
factorial 0 = 1
factorial n = n * factorial (n-1)

|| List comprehension
squares = [x * x | x <- [1..10]]

|| Pattern matching
sum [] = 0
sum (x:xs) = x + sum xs`
  },
  {
    name: 'Simula',
    description: 'The first object-oriented programming language, influential in the development of subsequent OOP languages.',
    code: `Begin
    OutText("Hello, World!");
    OutImage;
End;`,
    environment: 'GNU Cim',
    command: 'cim program.sim',
    type: 'Compiled',
    rank: 99,
    syntax: `
Class Person(Name); Text Name;
Begin
    Text procedure Greeting;
        Greeting :- "Hello, " & Name;
    
    ref(Person) procedure Copy;
        Copy :- new Person(Name);
End;

Process Class Simulation;
Begin
    ref(Person) person;
    person :- new Person("John");
End;`
  },
  {
    name: 'Modula-3',
    description: 'A successor to Modula-2 with added support for object-oriented programming.',
    code: `MODULE Hello;
IMPORT IO;
BEGIN
  IO.Put("Hello, World!\n");
END Hello.`,
    environment: 'Critical Mass Modula-3',
    command: 'm3c program.m3',
    type: 'Compiled',
    rank: 100,
    syntax: `
MODULE Example;

IMPORT IO;

TYPE
  Tree = REF RECORD
    value: INTEGER;
    left, right: Tree;
  END;

PROCEDURE Insert(t: Tree; v: INTEGER) =
BEGIN
  IF t = NIL THEN
    t := NEW(Tree, value := v, left := NIL, right := NIL);
  ELSIF v < t.value THEN
    Insert(t.left, v);
  ELSE
    Insert(t.right, v);
  END;
END Insert;

BEGIN
END Example.`
  }
];