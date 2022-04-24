// v e v - > v
// v e f -> f
// f e ? -> f

// v ou ? -> v
// f ou v -> v
// f ou f -> f

// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// a negação de verdadeiro é falso e virce-versa.


function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv, comprarTv32, manterSaudavel}
}
console.log(compras(true, true));