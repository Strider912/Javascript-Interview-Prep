// ==========================================
// 1. TIME COMPLEXITY (BASICS)
// ==========================================

// Definition:
// Time Complexity measures how the runtime of an algorithm
// grows with respect to input size (n).

// Key Point:
// It focuses on growth rate, NOT actual execution time.

// Example:
// If input size doubles → how does execution scale?

// ==========================================
// 2. IMPORTANT CONCEPT
// ==========================================

// ❗ Time Complexity ≠ Actual Time Taken

// Reason:
// - Depends on machine (CPU speed)
// - Depends on language (JS vs C++)
// - Depends on implementation

// Time Complexity is:
// ✔ Machine independent
// ✔ Language independent
// ✔ Focused on scalability

// ==========================================
// 3. WHY TIME COMPLEXITY MATTERS
// ==========================================

// Helps to:
// - Compare algorithms
// - Choose optimal solution
// - Predict performance for large inputs

// Example:
// n = 10 → both fast
// n = 1,000,000 → big difference

// ==========================================
// 4. COMMON COMPLEXITIES
// ==========================================

// O(1)      → Constant time
// O(log n)  → Logarithmic (Binary Search)
// O(n)      → Linear (Loop)
// O(n log n)→ Efficient sorting (Merge Sort)
// O(n^2)    → Nested loops
// O(2^n)    → Exponential (Recursion-heavy)

// ==========================================
// 5. SIMPLE JS EXAMPLES
// ==========================================

// O(1)
function getFirst(arr) {
  return arr[0];
}

// O(n)
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// O(n^2)
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// ==========================================
// 6. QUICK SUMMARY
// ==========================================

// - Measures scalability, not actual runtime
// - Independent of hardware/language
// - Critical for large inputs
// - Prefer lower growth rate (O(n) < O(n^2))

// ==========================================
// 1. BINARY SEARCH (FORMULA DERIVATION)
// ==========================================

// Idea:
// Each step reduces problem size by half

// Sequence:
// n → n/2 → n/4 → n/8 → ... → 1

// After x steps:
// n / (2^x) = 1

// Solve:
// n = 2^x
// log₂(n) = x

// Final:
// Time Complexity = O(log n)

// ==========================================
// 2. WHY THIS MATTERS
// ==========================================

// x = number of steps (iterations)
// → how many times we divide by 2 until size becomes 1

// Example:
// n = 8
// 8 → 4 → 2 → 1  (3 steps)
// log₂(8) = 3

// ==========================================
// 3. LINEAR SEARCH (FOR COMPARISON)
// ==========================================

// No reduction, full scan:
// n elements → n checks

// Time Complexity:
// O(n)

// ==========================================
// 4. FINAL COMPARISON
// ==========================================

// Linear:
// n steps → O(n)

// Binary:
// log₂(n) steps → O(log n)

// Key Insight:
// Binary search grows VERY slowly compared to linear
