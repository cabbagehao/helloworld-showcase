import { ProgrammingLanguage } from '../types';

export const languages21To40: ProgrammingLanguage[] = [
  {
    name: 'COBOL',
    description: 'A verbose business-oriented language primarily used in finance and administrative systems.',
    code: `DISPLAY "Hello, World!".`,
    environment: 'COBOL compiler',
    command: 'cobc -x program.cob',
    type: 'Compiled',
    rank: 21,
    syntax: `
IDENTIFICATION DIVISION.
PROGRAM-ID. EXAMPLE.
DATA DIVISION.
   WORKING-STORAGE SECTION.
   01 WS-NUM PIC 9(2) VALUE 42.
   01 WS-NAME PIC X(5) VALUE "COBOL".

PROCEDURE DIVISION.
   DISPLAY "Number is: " WS-NUM.
   STOP RUN.`
  },
  {
    name: 'Perl',
    description: 'A high-level, general-purpose, interpreted programming language.',
    code: `print "Hello, World!\n";`,
    environment: 'Perl interpreter',
    command: 'perl script.pl',
    type: 'Interpreted',
    rank: 22,
    syntax: `
# Variable declaration
my $x = 42;
my $name = "Perl";
my $is_valid = 1;

# Functions
sub greet {
    my ($name) = @_;
    return "Hello, $name";
}

# Classes (using packages)
package Person;
sub new {
    my ($class, $name) = @_;
    return bless { name => $name }, $class;
}`
  },
  {
    name: 'Assembly',
    description: 'Low-level programming language specific to particular computer architectures.',
    code: `section .data
    msg db 'Hello, World!',0xa
section .text
    global _start
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 13
    syscall`,
    environment: 'Assembly compiler (NASM, MASM)',
    command: 'nasm -f elf64 program.asm && ld program.o',
    type: 'Assembly',
    rank: 23,
    syntax: `
; Data section
section .data
    number dd 42
    name db 'Assembly',0

; Text section
section .text
    global _start
_start:
    mov eax, [number]
    ret`
  },
  {
    name: 'Objective-C',
    description: 'The primary programming language used for writing Apple software before Swift.',
    code: `NSLog(@"Hello, World!");`,
    environment: 'macOS/iOS development',
    command: 'clang program.m -framework Foundation',
    type: 'Compiled',
    rank: 24,
    syntax: `
// Variable declaration
NSInteger x = 42;
NSString *name = @"Objective-C";
BOOL isValid = YES;

// Functions
-(NSString *)greet:(NSString *)name {
    return [NSString stringWithFormat:@"Hello, %@", name];
}

// Classes
@interface Person : NSObject
@property NSString *name;
-(id)initWithName:(NSString *)name;
@end`
  },
  {
    name: 'Lua',
    description: 'A lightweight, high-level scripting language designed for embedded use.',
    code: `print("Hello, World!")`,
    environment: 'Lua interpreter',
    command: 'lua script.lua',
    type: 'Interpreted',
    rank: 25,
    syntax: `
-- Variable declaration
local x = 42
local name = "Lua"
local isValid = true

-- Functions
function greet(name)
    return "Hello, " .. name
end

-- Classes (using tables)
Person = {}
function Person:new(name)
    local obj = {name = name}
    setmetatable(obj, self)
    self.__index = self
    return obj
end`
  },
  {
    name: 'F#',
    description: 'A functional-first programming language for the .NET ecosystem.',
    code: `printfn "Hello, World!"`,
    environment: '.NET Framework/Core',
    command: 'dotnet fsi script.fsx',
    type: 'Compiled',
    rank: 26,
    syntax: `
// Variable declaration
let x = 42
let name = "F#"
let isValid = true

// Functions
let greet name =
    sprintf "Hello, %s" name

// Types
type Person = {
    Name: string
}
let person = { Name = "John" }`
  },
  {
    name: 'Clojure',
    description: 'A dynamic, functional dialect of Lisp on the Java platform.',
    code: `(println "Hello, World!")`,
    environment: 'JVM',
    command: 'clj script.clj',
    type: 'Compiled',
    rank: 27,
    syntax: `
; Variable declaration
(def x 42)
(def name "Clojure")
(def valid? true)

; Functions
(defn greet [name]
  (str "Hello, " name))

; Records
(defrecord Person [name]
  (greet [this]
    (str "Hello, " name)))`
  },
  {
    name: 'Groovy',
    description: 'An object-oriented programming language for the Java platform.',
    code: `println "Hello, World!"`,
    environment: 'JVM',
    command: 'groovy script.groovy',
    type: 'Compiled/Interpreted',
    rank: 28,
    syntax: `
// Variable declaration
def x = 42
String name = "Groovy"
boolean isValid = true

// Functions
def greet(name) {
    "Hello, ${name}"
}

// Classes
class Person {
    String name
    Person(name) {
        this.name = name
    }
}`
  },
  {
    name: 'Visual Basic .NET',
    description: 'A multi-paradigm, object-oriented programming language for .NET.',
    code: `Console.WriteLine("Hello, World!")`,
    environment: '.NET Framework/Core',
    command: 'vbc program.vb',
    type: 'Compiled',
    rank: 29,
    syntax: `
' Variable declaration
Dim x As Integer = 42
Dim name As String = "VB.NET"
Dim isValid As Boolean = True

' Functions
Function Greet(name As String) As String
    Return "Hello, " & name
End Function

' Classes
Public Class Person
    Private name As String
    Public Sub New(ByVal name As String)
        Me.name = name
    End Sub
End Class`
  },
  {
    name: 'Fortran',
    description: 'One of the oldest programming languages, designed for scientific computing.',
    code: `program hello
    print *, "Hello, World!"
end program hello`,
    environment: 'Fortran compiler',
    command: 'gfortran program.f90',
    type: 'Compiled',
    rank: 30,
    syntax: `
! Variable declaration
integer :: x = 42
character(len=7) :: name = "Fortran"
logical :: is_valid = .true.

! Functions
function greet(name)
    character(len=*), intent(in) :: name
    character(len=20) :: greet
    greet = "Hello, "//trim(name)
end function

! Modules
module person_module
    type :: person
        character(len=50) :: name
    end type person
end module person_module`
  },
  {
    name: 'PowerShell',
    description: 'A task automation framework and scripting language from Microsoft.',
    code: `Write-Host "Hello, World!"`,
    environment: 'Windows PowerShell/PowerShell Core',
    command: 'pwsh script.ps1',
    type: 'Interpreted',
    rank: 31,
    syntax: `
# Variable declaration
$x = 42
$name = "PowerShell"
$isValid = $true

# Functions
function Get-Greeting {
    param([string]$name)
    return "Hello, $name"
}

# Classes
class Person {
    [string]$name
    Person([string]$name) {
        $this.name = $name
    }
}`
  },
  {
    name: 'SAS',
    description: 'A statistical software suite developed by SAS Institute.',
    code: `data _null_;
    put "Hello, World!";
run;`,
    environment: 'SAS System',
    command: 'sas program.sas',
    type: 'Interpreted',
    rank: 32,
    syntax: `
/* Variable declaration */
data work.example;
    length name $20;
    x = 42;
    name = "SAS";
    is_valid = 1;
run;

/* Macro function */
%macro greet(name);
    %put Hello, &name;
%mend greet;

/* Procedures */
proc print data=work.example;
run;`
  },
  {
    name: 'Racket',
    description: 'A general-purpose, multi-paradigm programming language in the Lisp/Scheme family.',
    code: `#lang racket
(displayln "Hello, World!")`,
    environment: 'Racket',
    command: 'racket program.rkt',
    type: 'Interpreted',
    rank: 33,
    syntax: `
; Variable declaration
(define x 42)
(define name "Racket")
(define is-valid #t)

; Functions
(define (greet name)
  (string-append "Hello, " name))

; Structures
(struct person (name)
  #:transparent)`
  },
  {
    name: 'Prolog',
    description: 'A logic programming language associated with artificial intelligence.',
    code: `main :- write('Hello, World!'), nl.`,
    environment: 'Prolog interpreter',
    command: 'swipl -q -f program.pl',
    type: 'Interpreted',
    rank: 34,
    syntax: `
% Facts
number(42).
name("Prolog").
valid(true).

% Rules
greet(Name, Greeting) :-
    string_concat("Hello, ", Name, Greeting).

% Predicates
person(john).
person(jane).
likes(john, coding).`
  },
  {
    name: 'Ada',
    description: 'A structured, statically typed programming language designed for reliability.',
    code: `with Ada.Text_IO;
procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello, World!");
end Hello;`,
    environment: 'Ada compiler',
    command: 'gnatmake program.adb',
    type: 'Compiled',
    rank: 35,
    syntax: `
-- Variable declaration
X : Integer := 42;
Name : String := "Ada    ";
Is_Valid : Boolean := True;

-- Functions
function Greet(Name : String) return String is
begin
   return "Hello, " & Name;
end Greet;

-- Records
type Person is record
   Name : String(1..50);
end record;`
  },
  {
    name: 'LISP',
    description: 'The second-oldest high-level programming language still in use.',
    code: `(print "Hello, World!")`,
    environment: 'Common Lisp implementation',
    command: 'clisp program.lisp',
    type: 'Interpreted',
    rank: 36,
    syntax: `
; Variable declaration
(defvar *x* 42)
(defvar *name* "LISP")
(defvar *is-valid* t)

; Functions
(defun greet (name)
  (concatenate 'string "Hello, " name))

; Classes
(defclass person ()
  ((name :initarg :name
         :accessor name)))`
  },
  {
    name: 'Erlang',
    description: 'A functional programming language designed for building scalable applications.',
    code: `io:format("Hello, World!~n").`,
    environment: 'Erlang runtime system',
    command: 'erl -noshell -s program',
    type: 'Compiled',
    rank: 37,
    syntax: `
% Variable declaration
X = 42,
Name = "Erlang",
IsValid = true,

% Functions
greet(Name) ->
    string:concat("Hello, ", Name).

% Records
-record(person, {name}).
CreatePerson(Name) ->
    #person{name = Name}.`
  },
  {
    name: 'Pascal',
    description: 'An influential imperative and procedural programming language.',
    code: `program Hello;
begin
  writeln('Hello, World!');
end.`,
    environment: 'Pascal compiler',
    command: 'fpc program.pas',
    type: 'Compiled',
    rank: 38,
    syntax: `
{ Variable declaration }
var
  x: Integer = 42;
  name: string = 'Pascal';
  isValid: Boolean = True;

{ Functions }
function Greet(name: string): string;
begin
  Greet := 'Hello, ' + name;
end;

{ Records }
type
  TPerson = record
    name: string;
  end;`
  },
  {
    name: 'Scheme',
    description: 'A dialect of Lisp that supports multiple programming paradigms.',
    code: `(display "Hello, World!\n")`,
    environment: 'Scheme interpreter',
    command: 'scheme < program.scm',
    type: 'Interpreted',
    rank: 39,
    syntax: `
; Variable declaration
(define x 42)
(define name "Scheme")
(define is-valid #t)

; Functions
(define (greet name)
  (string-append "Hello, " name))

; Structures
(define-record-type person
  (make-person name)
  person?
  (name person-name))`
  },
  {
    name: 'TCL',
    description: 'A dynamic, interpreted programming language suited for embedding and rapid prototyping.',
    code: `puts "Hello, World!"`,
    environment: 'TCL interpreter',
    command: 'tclsh program.tcl',
    type: 'Interpreted',
    rank: 40,
    syntax: `
# Variable declaration
set x 42
set name "TCL"
set isValid 1

# Procedures
proc greet {name} {
    return "Hello, $name"
}

# Objects
oo::class create Person {
    variable name
    constructor {nm} {
        set name $nm
    }
}`
  }
];