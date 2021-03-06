var definitions = [
  {
    "question":"Self-Classify",
    "answer":"=y classifies the items of the nub of y (that is, ~.y) according to equality with the items of y , producing a boolean table of shape #~.y by #y . For example:   y=: 3 3 $ 'abcdef'   y ; (~.y) ; (=y)+---+---+-----+|abc|abc|1 0 1||def|def|0 1 0||abc|   |  "
  },
  {
    "question":"Equal",
    "answer":"x=y is 1 if x is equal to y , and is otherwise 0 .If x or y is a finite floating-point or complex number, the comparison is made with a tolerance t , normally 2 to the power _44 but also controlled by the fit conjunction !. , as in x=!.0 y .   Formally, x=y is 1 if the magnitude of x-y does not exceed t times the larger of the magnitudes of x and y .Tolerance applies similarly to other verbs as indicated for each, notably to Match (-:), to Floor (<.), and to Signum (*), but not to Grade (/:)."
  },
  {
    "question":"Copula",
    "answer":"The copula is used to assign a referent to a name, as in a=:3 and in sum=:+/ .  The copula =. is local as discussed underExplicit Definition (:),and =: is global, except that global assignment to a local name is not permitted and an assignment to a locative is always global.Copulas may also be used indirectly, with the name or names specified as a character or boxed list.If y is the expression to the right of the copula,then a single name is assigned y , otherwise each name is assigned >y if y is an atom, otherwise the i-th name is assigned >i{y . If the character list begins with  then gerund referents are evoked."
  },
  {
    "question":"Local ",
    "answer":""
  },
  {
    "question":"Copula",
    "answer":"The copula is used to assign a referent to a name, as in a=:3 and in sum=:+/ .  The copula =. is local as discussed underExplicit Definition (:),and =: is global, except that global assignment to a local name is not permitted and an assignment to a locative is always global.Copulas may also be used indirectly, with the name or names specified as a character or boxed list.If y is the expression to the right of the copula,then a single name is assigned y , otherwise each name is assigned >y if y is an atom, otherwise the i-th name is assigned >i{y . If the character list begins with  then gerund referents are evoked."
  },
  {
    "question":"Box",
    "answer":"<y is an atomic encoding of y , as discussed in Section II A.  The result has rank 0, and is decoded by > ."
  },
  {
    "question":"Less Than&nbsp;&nbsp;",
    "answer":"x<y is 1 if x is tolerantly less than y . See Equal (=) for a definition of tolerance. <!.t uses tolerance t . "
  },
  {
    "question":"Floor",
    "answer":"<.y gives the floor of y , that is, the largest integer less than or equal to y . Thus:   <. 4.6 4 _4 _4.64 4 _4 _5The implied comparison with integers is tolerant, as discussed under Equal (=), and is controlled by <.!.t .  See below for complex arguments."
  },
  {
    "question":"Lesser Of (Min)",
    "answer":"x<.y is the lesser of x and y . For example:   3 <. 4 _43 _4   <./7 8 5 9 22   <./\\7 8 5 9 27 7 5 5 2"
  },
  {
    "question":"Decrement",
    "answer":"<:y is y-1 . For example:   <: 2 3 5 71 2 4 6Also see Not (-.) ."
  },
  {
    "question":"Less than or Equal",
    "answer":"x<:y is 1 if x is less than or equal to y , and is otherwise 0 .   See Equal (=) for a discussion of tolerance. The fit conjunction (!.) applies to <: ."
  },
  {
    "question":"Open",
    "answer":"Open is the inverse of box, that is, ><y is y . When applied to an open array (that has no boxed elements), open has no effect. Opened atoms are brought to a common shape as discussed in Section II B."
  },
  {
    "question":"Larger Than",
    "answer":"x>y is 1 if x is tolerantly larger than y . See Equal (=) for a discussion of tolerance.  For example:   1 2 3 4 5  >  5 4 3 2 10 0 0 1 1Tolerance t is provided by >!.t ."
  },
  {
    "question":"Ceiling",
    "answer":">.y gives the ceiling of y , that is, the smallest integer greater than or equal to y . Thus:   >. 4.6 4 _4 _4.65 4 _4 _4The implied comparison with integers is tolerant, as discussed under Equal (=), and is controlled by >.!.t . See Floor (<.) and McDonnell [10] for complex arguments."
  },
  {
    "question":"Larger Of (Max)",
    "answer":"x>.y is the larger of x and y . For example:   3>.4 _44 3   >./7 8 5 9 29       >./\\7 8 5 9 27 8 8 9 9"
  },
  {
    "question":"Increment",
    "answer":">:y is y+1 . For example:   >: 2 3 5 73 4 6 8Also see Not (-.) ."
  },
  {
    "question":"Larger or Equal",
    "answer":"x>:y is 1 if x is tolerantly greater than or equal to y.See Equal (=) for a discussion of tolerance. >:!.t uses tolerance t ."
  },
  {
    "question":"Negative Sign and Infinity",
    "answer":"The symbol _ followed by a digit denotes a negative number (as in _3.4), and denotes infinity when used alone, or negative infinity (in __). It is also used in names, as discussed inPart I and in Part II Section I."
  },
  {
    "question":"Indeterminate",
    "answer":"The indeterminate _. is a numeric atom. It is provided to aid in dealing with NaN (not a number) in data from external sources, and should be removed from such data as soon as possible. The verb 128!:5 tests for _. .The only ways to create _. are as follows:  "
  },
  {
    "question":"Indeterminate",
    "answer":""
  },
  {
    "question":"Infinity",
    "answer":"_: is a constant function that yields an infinite result, that is, _: y is _"
  },
  {
    "question":"Infinity",
    "answer":"_: is a constant function that yields an infinite result, that is, x _: y is _"
  },
  {
    "question":"Conjugate",
    "answer":"+ y is the conjugate of y . For example, +3j4 is 3j_4 ."
  },
  {
    "question":"Plus",
    "answer":"#NAME?"
  },
  {
    "question":"Real / Imaginary",
    "answer":"+.y yields a two-element list of the real and imaginary parts of its argument.  For example, +.3j5 is 3 5, and +.3 is 3 0 ."
  },
  {
    "question":"GCD (Or)",
    "answer":"x+.y is the greatest common divisor of x and y . If the arguments are boolean (0 or 1), the functions +. and *. are equivalent to logical or and and.  The function -. similarly restricted is not."
  },
  {
    "question":"Double",
    "answer":"+: y is twice y . For example:   +: 3 0 _26 0 _4"
  },
  {
    "question":"Not-Or",
    "answer":"x +: y is the negation of x or y .   For example, 0 +: 0 is 1 ."
  },
  {
    "question":"Signum",
    "answer":"*y is _1 if y is negative, 0 if it is zero, 1 if it is positive; more generally, *y is the intersection of the unit circle with the line from the origin through the argument y in the complex plane.  For example:   *_3 0 5 3j4_1 0 1 0.6j0.8The comparison with zero is tolerant, as defined by the phrase (y%|y)*t<:|y where t denotes the tolerance.  The fit conjunction applies to signum, as in *!.t ."
  },
  {
    "question":"Times",
    "answer":"* denotes multiplication, defined as in elementary mathematics and extended to complex numbers as usual:   t=:+.x,y [ x=:2j4 [ y=:5j3   r=:-/*/t [ i=:+/ . * t   (x,:y);t;r;i;(r j. i);(x*y)+---+---+--+--+-----+-----+|2j4|2 4|_2|26|_2j26|_2j26||5j3|5 3|  |  |     |     |+---+---+--+--+-----+-----+"
  },
  {
    "question":"Length / Angle",
    "answer":"*.y is a two-element list of the length and angle (in radians) of the hypotenuse of a triangle with base and altitude equal to the real and imaginary parts y . For example, *. 3j4 is 5 0.927295."
  },
  {
    "question":"LCM (And)",
    "answer":"x*.y is the least common multiple of x and y . For boolean arguments (0 and 1)it is equivalent to and.  Thus:   0 1 *./ 0 10 00 1"
  },
  {
    "question":"Square",
    "answer":"*: y is the square of y ."
  },
  {
    "question":"Not-And",
    "answer":"x *: y is the negation of x and y . For example 0 *: 0 is 1 ."
  },
  {
    "question":"Negate",
    "answer":"-y is the negative of y . That is, it is defined as 0 - y . Thus, -2 0 _2 is _2 0 2 ."
  },
  {
    "question":"Minus",
    "answer":"#NAME?"
  },
  {
    "question":"Not",
    "answer":"-.y is 1-y ; for a boolean argument it is the complement (not); for a probability, it is the complementary probability."
  },
  {
    "question":"Less",
    "answer":"x-.y includes all items of x except for those that are cells of y .Tolerance t is provided by -.!.t ."
  },
  {
    "question":"Halve",
    "answer":"-:y is one half of y .  For example:   -: i. 50 0.5 1 1.5 2"
  },
  {
    "question":"Match",
    "answer":"x -: y yields 1 if its arguments match: in shapes, boxing, and elements; but using tolerant comparison.  See Equal (=).Matching with a tolerance t can be obtained using the verb -: !. t ."
  },
  {
    "question":"Reciprocal",
    "answer":"% y is the reciprocal of y , that is, 1%y . For example, %4 &harr; 0.25 ."
  },
  {
    "question":"Divided by",
    "answer":"x % y is division of x by y as defined in elementary math, except that 0%0 is 0 . See McDonnell [11], and the resulting pattern in the middle column and middle row of the table below."
  },
  {
    "question":"Matrix Inverse",
    "answer":"If y is a non-singular matrix, then %.y is the inverse of y . For example:   mp=: +/ . *         NB. Matrix product   (%. ; ] ; %. mp ]) i. 2 2+--------+---+---+|_1.5 0.5|0 1|1 0||   1   0|2 3|0 1|+--------+---+---+More generally, %.y is defined in terms of the dyadic case, with the left argument =i.{:$y (an identity matrix) or, equally, by the relation (%.y)mpx &harr; x %. y .The shape of %.y is |.$y .The vector and scalar cases are defined by using the matrix ,.y, but the shape of the result is $y .For a non-zero vector y, the result of %.y is a vector collinear with y whose length is the reciprocal of that of y; it is called the reflection of y in the unit circle (or sphere). Thus:   (%. ,: ] % %.) 2 3 40.0689655 0.103448 0.137931       29       29       29"
  },
  {
    "question":"Matrix Divide",
    "answer":"If y is non-singular, then x%.y is (%.y) mp x .   More generally, if the columns of y are linearly independent and if #x and #y agree, then x%.y minimizes the difference:   d=: x - y mp x %. yin the sense that the magnitudes +/d*+d are minimized.  Scalar and vector cases of y are treated as the one-column matrix ,.y .  Geometrically, y mp x%.y is the projection of the vector x on the column space of y, the point nearest to x in the space spanned by the columns of y .  Common uses of %. are in the solution of linear equations and in the approximation of functions by polynomials, as in c=: (f x)%. x ^ / i.4 ."
  },
  {
    "question":"Square Root",
    "answer":"%: y is the square root of y . If y is negative, the result is an imaginary number.  For example, %:-4 &harr; 0j2 ."
  },
  {
    "question":"Root",
    "answer":"x %: y is the x root of y . Thus, 3%:8 is 2, and 2%:y is %:y . In general, x %: y &harr; y^%x ."
  },
  {
    "question":"Exponential",
    "answer":"^y is equivalent to e^y, where e is Euler&rsquo;s number ^1 (approximately 2.71828). The natural logarithm (^.) is inverse to ^ (that is, y=^.^y and y=^^.y).The monad x^ is inverse to the monad x^. .   For example:   10^ 10^. 1 2 3 4 51 2 3 4 5             10^. 10^ 1 2 3 4 51 2 3 4 5"
  },
  {
    "question":"Power",
    "answer":"x^2 and x^3 and x^0.5 are the square, cube, and square root of x .In general, x^y is ^y*^.x, applying for complex numbers as well as real. For a non-negative integer y, the phrasex ^ y is equivalent to */y # x; in particular, */ on an empty list is 1, and x^0 is 1 for any x, including 0 .The fit conjunction applies to ^ to yield a stope defined as follows: x^!.k n is */x + k*i. n . In particular, ^!._1 is the falling factorial function."
  },
  {
    "question":"Natural Log",
    "answer":"The natural logarithm (^.) is inverse to the exponential ^ (i.e., y=^.^y and y=^^.y)."
  },
  {
    "question":"Logarithm",
    "answer":"The base-x logarithm x^.y is the inverse of power (^) in the sense that y = x^.x^y and y = x^x^.y ."
  },
  {
    "question":"Power",
    "answer":"n may be integer, boxed, or a gerund.Integer.  The verb u is applied n times.An infinite power n produces the limit of the application of u . For example, (2o.^:_)1 is 0.73908 , the solution of the equation y=Cos y . If n is negative, the obverse u^:_1 (see below) is applied |n times.Finally, u^:n y for an array n is produced by assembling u^:a y (for all the atoms a in n) into an overall result.The obverse is used in u.v and isproduced by v b. _1 .Repeated application of a verb is also provided by Bond ().Boxed. If n is boxed it must be an atom, and u^:(<m)&harr; u^:(i.m) y"
  },
  {
    "question":"Power",
    "answer":"n may be integer, boxed, or a gerund.Integer or Boxed. x u^:n y &harr; xu^:n y Gerund. (Compare with the gerund cases of the merge adverb }) x u^:(v0v1v2)y &harr; (x v0 y)u^:(x v1 y) (x v2 y)  x u^:(v1v2)y &harr; x u^:([v1v2) y  u^:(v1v2)y &harr; u^:(v1 y) (v2 y)"
  },
  {
    "question":"Shape Of",
    "answer":"$ y yields the shape of y as defined in Section II A. For example, the shape of a 2-by-3 matrix is 2 3, and the shape of the scalar 3 is an empty list (whose shape is 0). The rank of an argument y is #@$ y . For example:   rank=: #@$   (rank 3) , (rank ,3)0 1   (rank 3 4),(rank i. 2 3 4)1 3"
  },
  {
    "question":"Shape",
    "answer":"The shape of x$y is x,siy where siy is the shape of an item of y; x$y gives a length error if y is empty and x,siy does not contain a zero.  For example:   y=: 3 4$'abcdefghijkl'   y ; 2 2$ y+----+----+|abcd|abcd||efgh|efgh||ijkl|    ||    |ijkl||    |abcd|+----+----+This example shows how the result is formed from the items of y , the last 1-cell (abcd) showing that the selection is cyclic.The fit conjunction ($!.f) provides fill specified by the atom f , or the normal fill defined under Take ({.)if f is an empty vector."
  },
  {
    "question":"Sparse",
    "answer":"$.y converts a dense array to sparse, andconversely $.^:_1 y converts a sparse array todense.The identities f -: f.$. and f -:f.($.^:_1) hold for any function f , withthe possible exception of those (like overtake {.) whichuse the sparse element as the fill."
  },
  {
    "question":"Sparse",
    "answer":"0$.y applies $. or $.^:_1 asappropriate; that is, converts a dense array to sparse and asparse array to dense.1$.sh;a;e produces a sparse array. sh specifiesthe shape. a specifies the sparse axes; negativeindexing may be used. e specifies the &ldquo;zero&rdquo;element, and its type determines the type of the array. Theargument may also be sh;a (e is assumed to be afloating point 0) or just sh (a isassumed to be i.#sh &mdash; all axes are sparse &mdash; and e afloating point 0).2$.y gives the sparse axes (the a part);(2;a)$.y (re-)specifies the sparse axes; (2 1;a)$.y gives the number of bytes required for (2;a)$.y ;(22;a)$.y gives the number of items in the i part for the specified sparse axes a (that is, #4$.(2;a)$.y ).3$.y gives the sparse element (the e part);(3;e)$.y respecifies the sparse element.4$.y gives the index matrix (the i part).5$.y gives the value array (the x part).7$.y gives the number of non-sparse entries inarray y; that is, #4$.y or #5$.y.8$.y removes any completely &ldquo;zero&rdquo;value cells and the corresponding rows in the index matrix.The inverse of n$. is (-n)$. ."
  },
  {
    "question":"Self Reference",
    "answer":"$: denotes the longest verb that contains it.                                                   "
  },
  {
    "question":"Self Reference",
    "answer":""
  },
  {
    "question":"Evoke",
    "answer":""
  },
  {
    "question":"Evoke",
    "answer":""
  },
  {
    "question":"Nub",
    "answer":"~.y selects the nub of y , that is, all of its distinct items.  For example:   y=: 3 3 $ 'ABCABCDEF'   y;(~.y);(~.3);($~.3)+---+---+-+-+|ABC|ABC|3|1||ABC|DEF| | ||DEF|   | | |+---+---+-+-+"
  },
  {
    "question":"Nub Sieve",
    "answer":"~:y is the boolean list b such that b#y is the nub of y . For example:       ~: 'Mississippi'1 1 1 0 0 0 0 0 1 0 0"
  },
  {
    "question":"Not Equal",
    "answer":"x~:y is 1 if x is tolerantly unequal to y . See Equal (=). The fit conjunction may be used to specify tolerance, as in ~:!.t ."
  },
  {
    "question":"Magnitude",
    "answer":"|y &harr; %:y*+y . For example:   | 6 _6 3j46 6 5"
  },
  {
    "question":"Residue",
    "answer":"The familiar use of residue is in determining the remainder on dividing a non-negative integer by a positive:   3 | 0 1 2 3 4 5 6 70 1 2 0 1 2 0 1"
  },
  {
    "question":"Reverse",
    "answer":"|. y reverses the order of the items of y . For example:   |. t=: 'abcdefg'gfedcbaThe right shift is the monad |.!.f , equivalent to the dyad |.!.f with a left argument _1 . For example:   |.!.'#' t#abcdef       |.!.10 i.3 310 10 10 0  1  2 3  4  5"
  },
  {
    "question":"Rotate",
    "answer":"x|.y rotates successive axes of y by successive elements of x . Thus:    1 2 |. i. 3 5 7  8  9  5  612 13 14 10 11 2  3  4  0  1The phrase x |.!.f y produces a shift: the items normally brought around by the cyclic rotation are replaced by the atom f unless f is empty (0=#f), in which case they are replaced by the normal fill defined under Take ({.):   2 _2 |.!.'#'\"0 1 tcdefg####abcde"
  },
  {
    "question":"Transpose",
    "answer":"|: reverses the order of the axes of its argument. For example:   (] ; |:) i. 3 4+---------+------+|0 1  2  3|0 4  8||4 5  6  7|1 5  9||8 9 10 11|2 6 10||         |3 7 11|+---------+------+"
  },
  {
    "question":"Transpose",
    "answer":"x|:y moves axes x to the tail end.  If x is boxed, the axes in each box are run together to produce a single axis:   y=: 3 4$'abcdefghijkl'   y;(1 0|:y);(0|:y);((<0 1)|:y)+----+---+---+---+|abcd|aei|aei|afk||efgh|bfj|bfj|   ||ijkl|cgk|cgk|   ||    |dhl|dhl|   |+----+---+---+---+"
  },
  {
    "question":"Determinant",
    "answer":"The phrases -/ . * and +/ . * are the determinant and permanent of square matrix arguments.  More generally, the phrase u . v is defined in terms of a recursive expansion by minors along the first column, as discussed below."
  },
  {
    "question":"Dot Product",
    "answer":"For vectors and matrices, the phrase x +/ . * y is equivalent to the dot, inner, or matrix product of math; other rank-0 verbs such as <. and *. are treated analogously.  In general, u . v is defined by u@(v\"(1+lv,_)) , restated in English below. "
  },
  {
    "question":"Even , Odd",
    "answer":"u .. v &harr; (u + uv) % 2:u .: v &harr; (u - uv) % 2:"
  },
  {
    "question":"Even , Odd",
    "answer":"u .. v &harr; (u + uv) % 2:u .: v &harr; (u - uv) % 2:"
  },
  {
    "question":"Explicit Definition",
    "answer":""
  },
  {
    "question":"Obverse",
    "answer":"The result of u :. v is the verb u, but with an assigned obverse v (used as the &ldquo;inverse&rdquo; under the conjunctions . and ^:)."
  },
  {
    "question":"Adverse",
    "answer":"The result of u :: v is that of u, provided that u completes without error; otherwise the result is the result of v ."
  },
  {
    "question":"Ravel",
    "answer":",y gives a list of the atoms of y in &ldquo;normal&rdquo; order: the result is ordered by items, by items within items, etc.  The result shape is 1$*/$ y . Thus:   y=: 2 4 $ 'abcdefgh'   yabcdefgh   ,yabcdefgh"
  },
  {
    "question":"Append",
    "answer":"x,y appends items of y to items of x after:1."
  },
  {
    "question":"Ravel Items",
    "answer":"If y is an atom, then ,.y is 1 1$y ; otherwise, ,.y is ,\"_1 y , the table formed by ravelling each item of y ."
  },
  {
    "question":"Stitch",
    "answer":"x,.y is equivalent to x,\"_1 y . In other words, items of x are stitched to corresponding items of y .The fit conjunction (,.!.f) provides fill specified by the atom f ."
  },
  {
    "question":"Itemize",
    "answer":",:y adds a leading unit axis to y , giving a result of shape 1,$y . Thus:   $ ,: 2 3 41 3"
  },
  {
    "question":"Laminate",
    "answer":"An atomic argument in x,:y is first reshaped to the shape of the other (or to a list if the other argument is also atomic); the results are then itemized and catenated, as in (,:x),(,:y) .The fit conjunction (,:!.f) provides fill specified by the atom f , orthe normal fill defined under Take ({.)if f is an empty vector."
  },
  {
    "question":"Raze",
    "answer":";y assembles along a leading axis the opened elements of the ravel of y . The fit conjunction (;!.f) provides fill specified by the atom f ."
  },
  {
    "question":"Link",
    "answer":"x;y is (<x),y if y is boxed, and (<x),<y if y is open."
  },
  {
    "question":"Cut",
    "answer":"u;.0 y applies u to y after reversing y along each axis; it is equivalent to (0 _1 */$y) u;.0 y .The fret 0{y (the leading item of y) marks the start of an interval of items of y ; the phrase u;.1 y applies u to each such interval.  The phrase u;._1 y differs only in that frets are excluded from the result.  In u;.2 and u;._2 the fret is the last item, and marks the ends of intervals.The monads u;.3 and u;._3 apply u to tesselation by &ldquo;maximal cubes&rdquo;, that is, they are defined by their dyadic cases using the left argument ($$y)$<./$y . m;.n y applies successive verbs from the gerund m to the cuts of y , extending m cyclicallyas required."
  },
  {
    "question":"Cut",
    "answer":"x u;.0 y applies u to a rectangle or cuboid of y with one vertex at the point in y indexed by v=:0{x , and with the opposite vertex determined as follows: the dimension is |1{x , but the rectangle extends back from v along any axis j for which the index j{v is negative. Finally, the order of the selected items is reversed along each axis k for which k{1{x is negative.  If x is a vector, it is treated as the matrix 0,:x .The frets in the dyadic cases 1 , _1 , 2 , and _2 are determined by the 1s in boolean vector x ; an empty vector x and non-zero #y indicates the entire of y . If x is the atom 0 or 1 it is treated as (#y)#x . In general, boolean vector >j{x specifies how axis j is to be cut, with an atom treated as (j{$y)#>j{x .u;.3 and u;._3 yield (possibly overlapping) tesselations. xu;._3y applies u to each complete rectangle of size |1{x beginning at integer multiples of (each item of) the movement vector 0{x , with an infinite size being replacedby the signed length of the corresponding axis.As in u;.0 , reversal occurs along each axis for which the size 1{x is negative.  The case of a list x is equivalent to 1,:x , and therefore provides a complete tesselation of size x . The case u;.3 differs in that shards of length less than |1{x are included.x m;.n y applies successive verbs from the gerund m to the cuts of y , extending m cyclically as required.The 0- and 3-cuts have a left rank of 2; the 1- and 2-cuts have a left rank of 1."
  },
  {
    "question":"Words",
    "answer":";:y is the list of boxed words in the list y according to the rhematic rules of Part Iand the rules regarding NB. . The function also applies reasonably well to ordinary text.For a suitable left argument x , the result of x;:y is equivalent to ;:y . Thus:mj=: 256$0                     NB. X othermj=: 1 (9,a.i.' ')}mj          NB. S space and tabmj=: 2 ((a.i.'Aa')+/i.26)}mj   NB. A A-Z a-z excluding N Bmj=: 3 (a.i.'N')}mj            NB. N the letter Nmj=: 4 (a.i.'B')}mj            NB. B the letter Bmj=: 5 (a.i.'0123456789_')}mj  NB. 9 digits and _mj=: 6 (a.i.'.')}mj            NB. D .mj=: 7 (a.i.':')}mj            NB. C :mj=: 8 (a.i.'''')}mj           NB. Q quotesj=: _2]\\\"1 }.\".;._2 (0 : 0) ' X    S    A    N    B    9    D    C    Q ']0 1 1  0 0  2 1  3 1  2 1  6 1  1 1  1 1  7 1  NB. 0 space 1 2  0 3  2 2  3 2  2 2  6 2  1 0  1 0  7 2  NB. 1 other 1 2  0 3  2 0  2 0  2 0  2 0  1 0  1 0  7 2  NB. 2 alp/num 1 2  0 3  2 0  2 0  4 0  2 0  1 0  1 0  7 2  NB. 3 N 1 2  0 3  2 0  2 0  2 0  2 0  5 0  1 0  7 2  NB. 4 NB 9 0  9 0  9 0  9 0  9 0  9 0  1 0  1 0  9 0  NB. 5 NB. 1 4  0 5  6 0  6 0  6 0  6 0  6 0  1 0  7 4  NB. 6 num 7 0  7 0  7 0  7 0  7 0  7 0  7 0  7 0  8 0  NB. 7 ' 1 2  0 3  2 2  3 2  2 2  6 2  1 2  1 2  7 0  NB. 8 '' 9 0  9 0  9 0  9 0  9 0  9 0  9 0  9 0  9 0  NB. 9 comment)   x=: 0;sj;mj   y=: 'sum=. (i.3 4)+/ .*0j4+pru 4'   x ;: y+---+--+-+--+---+-+-+-+-+-+---+-+---+-+|sum|=.|(|i.|3 4|)|+|/|.|*|0j4|+|pru|4|+---+--+-+--+---+-+-+-+-+-+---+-+---+-+   (x ;: y) -: ;: y1   (5;sj;mj) ;: y 0 _1 0 2 2 1 1  0 2 2 2 0 2  0 2 2 2 0 3  0 2 0 1 2 4  3 1 6 1 0 5  3 1 1 0 3 6 _1 0 0 1 1 7  6 1 2 2 2 8  7 2 6 1 0 9  7 1 5 6 210  9 6 1 0 511 _1 0 5 6 112 11 6 0 1 413 12 1 0 1 214 13 1 0 1 215 14 1 1 0 316 _1 0 6 1 117 16 1 0 1 218 17 1 5 6 219 18 6 2 6 020 18 6 5 6 021 18 6 0 1 422 21 1 2 2 223 22 2 2 2 024 22 2 2 2 025 22 2 1 0 326 _1 0 5 6 1   "
  },
  {
    "question":"Sequential Machine",
    "answer":"x;:y implements a sequential machine(finite state machine, finite state automaton). x is the specificationof a machine, including the state transition table, and y is the input.  A sequential machine solves the problem of recognizing the &ldquo;words&rdquo; in the input.The machine starts in some initial stateand processes the input one item at a time;given the current state and input item,the new state and output are determinedby the state transition table.  The machine then proceeds to process the next input item.In detail:y is any array and x=.f;s;m;ijrd is a boxed listfrom which ijrd or both m and ijrd may be elided.f is a function code, an integer between 0 and 5.  (Explained below.)m is a list of the input mapping; each box of m contains the items of y that are mapped to the same index.  That is, the mapped input is my=.(yi.~;m){(#m),~(#>m)#i.#m . If y  is a string (a list of literals), m may also bea list of non-negative integers corresponding to each atom of the alphabet a. , and the mapped input is my=.(a.i.y){m . Finally, if m is the empty list or is elided (and y is a numeric list), then the mapped input my is just y  itself. s is a 3-dimensional, 2-column array of non-negative integers of the state transition and output table. It has shape p,q,2 where p bounds the states and q bounds the mapped inputs.That is, p>0{\"1s , and q>#m if m isa list of boxes or q>m if m is a list of integers.ijrd is an integer parameter list with up to 4 elements. i is the initial iteration counter and index into the input y , r is the initial state, j is the initial index of the current word, and d is an end-of-input action parameter (see below).It is required that (0<:i)*.i<#y and (_1=j)+.(0<:j)*.j<i . If ijrd is elided, then the defaults are 0_10_1 .x;:y iterates over the atoms of my, the mapped input. r is the current state and j is the beginning index of a word; initially, r is 0 and j is _1 (or as specified by ijr).At iteration i , the current mapped input is c=.i{my and the relevant statetable entry is e=.s{~<r,c (a 2-element integer list).  The new state is 0{e , and theoutput code 1{e signifies one of the following: 0   no output 1   j=.i             2   j=.i [ ew(i,j,r,c)  3   j=._1 [ ew(i,j,r,c)  4   j=.i [ ev(i,j,r,c)  5   j=._1 [ ev(i,j,r,c)  6  stopew(i,j,r,c) (&ldquo;emit word&rdquo;) signals index error if j is _1 , and accumulates to the result information on the current word according to the function code f :"
  },
  {
    "question":"Tally",
    "answer":"#y is the number of items in y . Thus:    (#'');(#'a');(#'octothorpe')+-+-+--+|0|1|10|+-+-+--+   (#3);(#,3);(# 3 4)+-+-+-+|1|1|2|+-+-+-+   (#i.4 5 6);(#$i.4 5 6)+-+-+|4|3|+-+-+"
  },
  {
    "question":"Copy",
    "answer":"If the arguments have an equal number of items, then x#y copies +/x items from y, with i{x repetitions of item i{y . Otherwise, if one is an atom it is repeated to make the item count of the arguments equal. The complex left argument a j. b copies a items followed by b fills.  The fit conjunction provides specified fills, as in #!.f ."
  },
  {
    "question":"Base Two",
    "answer":"#.y is the base-2 value of y, that is, 2#.y . For example:   #. 1 0 1 010   #. 2 3$ 0 0 1,1 0 11 5"
  },
  {
    "question":"Base",
    "answer":"x#.y is a weighted sum of the items of y ; that is, +/w*y , where w is the product scan */\\.}.x,1 . An atomic argument is reshaped to the shape of the other argument."
  },
  {
    "question":"Antibase Two",
    "answer":"#: y is the binary representation of y , and is equivalent to (m#2)#:y , where m is the maximum of the number of digits needed to represent the atoms of y in base 2 . For example:   i. 80 1 2 3 4 5 6 7       #: i. 80 0 00 0 10 1 00 1 11 0 01 0 11 1 01 1 1"
  },
  {
    "question":"Antibase",
    "answer":"In simple cases r#: is inverse to r#. . Thus:   r=: 24 60 60   r #: r #. 2 3 42 3 4But if r #. y exceeds (*/r)-1 (the largest integer representable in the radix r), then the result of r#:y is reduced modulo */r .   For example:   r #: r #. 29 3 45 3 4"
  },
  {
    "question":"Factorial",
    "answer":"For a non-negative integer argument y, the definition is */>:i.y . In general, !y is &Gamma;(1+y) (the gamma function).Thus:   (*/1 2 3 4 5) , (!5)120 120                 ]x=: 2 %~ 3 -~ i. 2 4_1.5 _1 _0.5 0 0.5  1  1.5 2                 !x_3.54491 _ 1.77245 10.886227 1 1.32934 2                 ]fi=:!^:_1(24 25 2.1 9876)4 4.02705 2.05229 7.33019                 ! fi24 25 2.1 9876"
  },
  {
    "question":"Out Of (Combinations)",
    "answer":"For non-negative arguments x!y is the number of ways that x things can be chosen out of y . More generally, x!y is (!y)%(!x)*(!y-x) . Thus:   3!510   (!5)%(!3)*(!5-3)10   1j2 ! 3.58.64269j16.9189   ]y=:2!^:_1 (45 4.1 30 123)10 3.40689 8.26209 16.1924   2 ! y45 4.1 30 123   ]x=:!10^:_1 (2.5 45)0.3433618 2   x ! 102.5 45"
  },
  {
    "question":"Fit (Customize)",
    "answer":"This conjunction modifies certain verbs in ways prescribed in their definitions.  For example, =!.t is the relation of equality using tolerance t , and ^!.r is the factorial function so defined that x ^!.r n is */x + r * i. n . Consequently, ^!._1 is the falling factorial function."
  },
  {
    "question":"Fit (Customize)",
    "answer":""
  },
  {
    "question":"Foreign",
    "answer":"This conjunction is used to communicate with the host system as well as with the keyboard (as an input file) and with the screen (as an output file).  It is also used to provide a variety of extra-lingual facilities, such as setting the form of function display, determining the class of a name (noun, verb, adverb, or conjunction), and listing all existing names in specified classes.Appendix A shows all uses of the foreign conjunction. "
  },
  {
    "question":"Foreign",
    "answer":""
  },
  {
    "question":"Insert",
    "answer":"u/y applies the dyad u between the items of y .  Thus:   m=: i. 3 2   m;(+/m);(+/\"1 m);(+/2 3 4)+---+---+-----+-+|0 1|6 9|1 5 9|9||2 3|   |     | ||4 5|   |     | |+---+---+-----+-+m/y inserts successive verbs from the gerund m between items of y, extending m cyclically as required.  Thus, +*/i.6 is 0+1*2+3*4+5 ."
  },
  {
    "question":"Table",
    "answer":"If x and y are numeric lists, then x */ y is their multiplication table.  Thus:   1 2 3 */ 4 5 6 7 4  5  6  7 8 10 12 1412 15 18 21In general, each cell of x is applied to the entire of y .  Thus x u/ y is equivalent to x u\"(lu,_) y where lu is the left rank of u .The case */ is called outer product in tensor analysis."
  },
  {
    "question":"Oblique",
    "answer":"u/.y applies u to each of the oblique lines of a table y . For example:   i.3 40 1  2  34 5  6  78 9 10 11   </. i.3 4+-+---+-----+-----+----+--+|0|1 4|2 5 8|3 6 9|7 10|11|+-+---+-----+-----+----+--+In general, u/.y is the result of applying u to the oblique lines of _2-cells of y .   If the rank of y is less than two, y is treated as the table ,.y .m/.y applies successive verbs from the gerund m to the oblique lines of _2-cells of y, extending m cyclically as required.  Thus:   <(<@|.) /. i.3 4+-+---+-----+-----+----+--+|0|4 1|2 5 8|9 6 3|7 10|11|+-+---+-----+-----+----+--+"
  },
  {
    "question":"Key",
    "answer":"x u/.y &harr; (=x) u@# y , that is, items of x specify keys for corresponding items of y and u is applied to each  collection of y having identical keys.  For example:   1 2 3 1 3 2 1 </. 'abcdefg'+---+--+--+|adg|bf|ce|+---+--+--+x m/.y applies successive verbs from the gerund m to the collections of y, extending m cyclically as required."
  },
  {
    "question":"Grade Up",
    "answer":"/: grades any argument, yielding a permutation vector; (/:y){y sorts y in ascending order.  For example:   n=: 3 1 4 2 1 3 3   ]g=: /: n1 4 3 0 5 6 2   g { n1 1 2 3 3 3 4"
  },
  {
    "question":"Sort Up",
    "answer":"x/:y is (/:y){x ; i.e., x is sorted to an order specified by y . In particular, y/:y (or /:~y) sorts y . For example:   y=: 'popfly'   y /: 3 1 4 1 5 9ofpply       y /: yfloppy"
  },
  {
    "question":"Prefix",
    "answer":"u\\y has #y items resulting from applying u to each of the prefixes k{.y , for k from 1 to #y .m\\y applies successive verbs from the gerund m to the prefixes of y , extending m cyclically as required."
  },
  {
    "question":"Infix",
    "answer":"If x>:0 , the items of x u\\ y result from applying u to each infix of length x . If x<0 , u is applied to non-overlapping infixes of length |x, including any final shard.x m\\ y applies successive verbs from the gerund m to the infixes of y , extending m cyclically as required."
  },
  {
    "question":"Suffix",
    "answer":"u\\.y has #y items resulting from applying u to suffixes of y , beginning with one of length #y (that is, y itself), and continuing through a suffix of length 1 .m\\.y applies successive verbs from the gerund m to the suffixes of y , extending m cyclically as required."
  },
  {
    "question":"Outfix",
    "answer":"If x>:0 in x u\\. y , then u applies to outfixes of y obtained by suppressing successive infixes of length x . If x<0 , the outfixes result from suppressing non-overlapping infixes, the last of which may be a shard.x m\\.y applies successive verbs from the gerund m to the outfixes of y, extending m cyclically as required."
  },
  {
    "question":"Grade Down",
    "answer":"\\: grades any argument, yielding a permutation vector; (\\:y){y sorts y in descending order.  For example:   ]g=:\\:y=:3 1 4 2 1 3 32 0 5 6 3 1 4       g{y4 3 3 3 2 1 1"
  },
  {
    "question":"Sort Down",
    "answer":"x\\:y is (\\:y){x ; i.e., x is sorted to an order specified by y . In particular, y\\:y (or \\:~y) sorts y .For example:   \\:~ 'abecedarian'rnieedcbaaa      \\:~\"1 'dozen',:'disk'zonedskid"
  },
  {
    "question":"Same",
    "answer":"The monads [ and ] are each identity functions; each yields its argument."
  },
  {
    "question":"Left, Right",
    "answer":"x [ y (left bracket) yields the left argument x , and x ] y (right bracket) yields the right argument y ."
  },
  {
    "question":"Cap",
    "answer":"[: caps a left branch of a fork as described in Section II F.  For example, the verb p=: [: +/ + * - applies the monad +/ to the result of the fork + * - .[: signals error on any argument."
  },
  {
    "question":"Cap",
    "answer":""
  },
  {
    "question":"Same",
    "answer":"The monads [ and ] are each identity functions; each yields its argument."
  },
  {
    "question":"Left, Right",
    "answer":"x [ y (left bracket) yields the left argument x , and x ] y (right bracket) yields the right argument y ."
  },
  {
    "question":"Catalogue",
    "answer":"{y forms a catalogue from the atoms of its argument, its shape being the chain of the shapes of the opened items of y . The common shape of the boxed results is $y . For example:   { 'ht';'ao';'gtw'+---+---+---+|hag|hat|haw|+---+---+---+|hog|hot|how|+---+---+---++---+---+---+|tag|tat|taw|+---+---+---+|tog|tot|tow|+---+---+---+The Cartesian product is readily defined in terms of { , thus:   CP=: {@(,<)   0 1 CP 2 3 4+---+---+---+|0 2|0 3|0 4|+---+---+---+|1 2|1 3|1 4|+---+---+---+"
  },
  {
    "question":"From",
    "answer":"If x is an integer in the range from -n=: #y to n-1 , then x{y selects item n|x from y . Thus:   2 0 _1 _3 { 'abcdefg'cage   t=:3 4$'abcdefghijkl'   1{tefghMore generally, >x may be a list whose successive elements are (possibly) boxed arrays that specify selection along successive axes of y .Finally, if any r=:>j{>x used in the selection is itself boxed, selection is made by the indices along that axis that do not occur in >r .Note that the result in the very last dyadic example, that is, (<<<_1){m , is all except the last item."
  },
  {
    "question":"Head",
    "answer":"{.y selects the leading item of y , or anitem of fills if y has no items; that is, {.y &harr; 0{1{.y . Thus:   a=: i. 3 2 3   a;({.a);({.\"2 a);({.\"1 a)+--------+-----+--------+-----+| 0  1  2|0 1 2| 0  1  2| 0  3|| 3  4  5|3 4 5| 6  7  8| 6  9||        |     |12 13 14|12 15|| 6  7  8|     |        |     || 9 10 11|     |        |     ||        |     |        |     ||12 13 14|     |        |     ||15 16 17|     |        |     |+--------+-----+--------+-----+   ]b=: ;/a+-----+-------+--------+|0 1 2|6  7  8|12 13 14||3 4 5|9 10 11|15 16 17|+-----+-------+--------+       {.> b 0  1  2 6  7  812 13 14   {. i.0 30 0 0"
  },
  {
    "question":"Take",
    "answer":"If x is an atom, x{.y takes from y an interval of |x items; beginning at the front if x is positive, ending at the tail if it is negative.In an overtake (in which the number to be taken exceeds the number of items), extra items consist of fills; zeros if y is numeric, a: if it is boxed, spaces if literal, and s: ' ' if symbol.  The fill atom f is also specified by fit, as in {.!.f .In general, if y is not an atom, x may be a list of length not more than $$y , and if y is an atom, it is replaced by ((#x)$1)$y . Element k produces (k{x){.\"(($$y)-k) y ; an infinite value is replaced by the length of thecorresponding axis."
  },
  {
    "question":"Tail",
    "answer":"{:y selects the last item of y , or anitem of fills if y has no items; that is, {:y &harr; 0{_1{.y . The fill atom f is also specified by fit, as in {:!.f  ."
  },
  {
    "question":"Tail",
    "answer":""
  },
  {
    "question":"Map",
    "answer":"{::y has the same boxing as y and its elements are the paths to each leaf (each open array)."
  },
  {
    "question":"Fetch",
    "answer":"x{::y fetches a subarray of y according to path x ; the selection at each level is based on { and, except at the last level, must result in an atom."
  },
  {
    "question":"Item Amend",
    "answer":"If m is numeric and z=: m} y , then $z equals $m , which equals the shape of an item of y . The atom j{z is j{(j{m){y . For example:   y=: a.{~(a.i.'A')+i.4 5   m=: 3 1 0 2 1   y ; m ; m}y+-----+---------+-----+|ABCDE|3 1 0 2 1|PGCNJ||FGHIJ|         |     ||KLMNO|         |     ||PQRST|         |     |+-----+---------+-----+"
  },
  {
    "question":"Amend",
    "answer":"If m is not a gerund, x m} y is formed by replacing by x those parts of y selected by m{  (an error is signalled if such selection requires fill).Thus:   y; '%*'(1 3;2 _1)} y+-----+-----+|ABCDE|ABCDE||FGHIJ|FGH%J||KLMNO|KLMN*||PQRST|PQRST|+-----+-----+$x must be a suffix of $m{y , and x has the same effect as ($m{y)$,x . Thus:   y; 'think' 1 2} y+-----+-----+|ABCDE|ABCDE||FGHIJ|think||KLMNO|think||PQRST|PQRST|+-----+-----+"
  },
  {
    "question":"Behead",
    "answer":"}. drops the leading item of its argument."
  },
  {
    "question":"Drop",
    "answer":"x }. y drops (at most) |x items from y, dropping from the front if x is positive and from the tail if negative.In general, if y is not an atom, x may be a list of length at most r=:$$y, and the effect of element k is (k{x) }.\"(r-k) y; if y is an atom, the result is (0=x)$y ."
  },
  {
    "question":"Curtail",
    "answer":"}:y drops the last item of y, and is equivalent to _1 }. y . Thus:"
  },
  {
    "question":"Rank",
    "answer":"The verb m\"n produces the constant result m for each cell to which it applies.  The rank used is 3 $.|. n .  For example, if n=:2, the three ranks are 2 2 2, and if n=: 2 3, they are 3 2 3 . A negative rank is complementary: m\"(-r) y is equivalent to m\"(0>.(#$y)-r)\"_ y ."
  },
  {
    "question":"Do",
    "answer":"\".y executes the sentence y . If the execution results in a noun, the result of \".y is that noun; if the execution result is a verb, adverb, or conjunction, or if there is no execution result, the result of \".y is an empty vector."
  },
  {
    "question":"Numbers",
    "answer":"x\".y converts character array y into numbers.  The shape of the result is (}:$y),(1=n)}.n where n is the maximum number of numbers in any row. x is a scalar number used to replace illegal numbers and to pad narrow rows.  In the conversion, the normal rules for numeric constants are relaxed as follows:the negative sign can be - or _commas within numbers are ignoredfractions need not have a digit 0 before the decimal pointa number may be preceded by a + sign; the exponent of a number in exponential format may be preceded by a + sign"
  },
  {
    "question":"Default Format",
    "answer":"Default output is identical to this monadic case, providing a minimum of one space between columns.  For example:   ]text=: \": i. 2 50 1 2 3 45 6 7 8 9   $ text2 9   3 + text|domain error|   3  +text   '*#' ,. text*0 1 2 3 4#5 6 7 8 9   \": 'abcd'abcd   $ \": ''0"
  },
  {
    "question":"Format",
    "answer":"x\":y produces a literal representation of y in a format specified by x . Each element of x is a complex number w j. d , controlling the representation of the corresponding column of y as follows:|w specifies the width allocated; if this space is inadequate, the entire space is filled with asterisks.  If w is zero, enough space is allocated.|d specifies the number of digits following the decimal point (itself included only if d is not zero).Any negative sign is placed just before the leading digit.  If w>:0 and d>:0, the result is right-justified in the space.  Otherwise (if w<0 or d<0),  the result is put in exponential form (with one digit before the decimal point) and is left-justified and aligned on the decimal point. Only the real part of complex y is formatted.See below for boxed y ."
  },
  {
    "question":"Tie",
    "answer":"In English, a gerund is a noun that carries the force of a verb, as does the noun cooking in the art of cooking.  The tie applies to two verbs to produce a gerund.  Gerunds are commonly used with Insert (/) and with Agenda (@.):"
  },
  {
    "question":"Evoke Gerund",
    "answer":"This conjunction is defined for three cases:m : 0 "
  },
  {
    "question":"Evoke Gerund",
    "answer":""
  },
  {
    "question":"Atop",
    "answer":"u@v y &harr; u v y . For example, +:@- 7 is _14 (double the negation).  Moreover, the monadic uses of u@v and uv are equivalent."
  },
  {
    "question":"Atop",
    "answer":"x u@v y &harr; u x v y .   For example, 3 +:@- 7 is _8 (double the difference)."
  },
  {
    "question":"Agenda",
    "answer":"m@.n is a verb defined by the gerund m with an agenda specified by n ; that is, the verb represented by the train selected from m by the indices n . If n is boxed, the train is parenthesized accordingly.  The case m@.v uses the result of the verb v to perform the selection."
  },
  {
    "question":"Agenda",
    "answer":""
  },
  {
    "question":"At",
    "answer":"@: is equivalent to @ except that  ranks are infinite. "
  },
  {
    "question":"At",
    "answer":""
  },
  {
    "question":"Bond",
    "answer":"mv y is defined as mvy ; that is, the left argument m is bonded with the dyad v to produce a monadic function. Similarly, un y is defined as yun ; in other words, as the dyad u provided with the right argument n to produce a monadic function."
  }
]