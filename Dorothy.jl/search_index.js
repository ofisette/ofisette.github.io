var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Dorothy.jl-1",
    "page": "Home",
    "title": "Dorothy.jl",
    "category": "section",
    "text": "Julia package for molecular structure manipulation and analysis"
},

{
    "location": "#License-1",
    "page": "Home",
    "title": "License",
    "category": "section",
    "text": "You can use Dorothy under the terms of the MIT License; see LICENSE.md in the project files, or Software license in the documentation."
},

{
    "location": "#Status-1",
    "page": "Home",
    "title": "Status",
    "category": "section",
    "text": "Dorothy is in early development, and targets Julia 1.x."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Dorothy is not a registered package. You can add it to your Julia environment by giving the URL to its repository. The unregistered packages Formats, FormatCodecs and FormatStreams are required as dependencies and can be installed in the same manner.using Pkg\n\nPkg.add(\"https://github.com/ofisette/Formats.jl\")\nPkg.add(\"https://github.com/ofisette/FormatCodecs.jl\")\nPkg.add(\"https://github.com/ofisette/FormatStreams.jl\")\nPkg.add(\"https://github.com/ofisette/Dorothy.jl\")"
},

{
    "location": "#Documentation-1",
    "page": "Home",
    "title": "Documentation",
    "category": "section",
    "text": "Documentation is available online, and can be built from the project files. Documentation for the the public API is also available directly from the Julia REPL."
},

{
    "location": "#Citing-1",
    "page": "Home",
    "title": "Citing",
    "category": "section",
    "text": "If you use Dorothy in your research, please cite the software in your publications. There is currently no published work describing Dorothy, but it can still be cited as follows:Olivier Fisette. Dorothy: Julia package for molecular structure manipulation and analysis, version 0.1, 2019. https://github.com/ofisette/Dorothy.jl"
},

{
    "location": "#Community-1",
    "page": "Home",
    "title": "Community",
    "category": "section",
    "text": "Dorothy is developed by Olivier Fisette in the Molecular Simulation Group of Lars V. Schäfer at the Center for Theoretical Chemistry of Ruhr-University Bochum, Germany.Contributions, bug reports and feature suggestions are welcome. Development is tracked in the project’s repository."
},

{
    "location": "intro/#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "intro/#Introduction-1",
    "page": "Introduction",
    "title": "Introduction",
    "category": "section",
    "text": "Dorothy provides data structures and algorithms for the scripted or interactive manipulation and analysis of molecular systems, with a particular emphasis on biological macromolecules. You can use Dorothy to build or modify systems for starting molecular dynamics simulations, to analyse trajectories output by such simulations, or to examine structures from the Protein Data Bank."
},

{
    "location": "intro/#Main-package-features-1",
    "page": "Introduction",
    "title": "Main package features",
    "category": "section",
    "text": "Array-like data structures representing particle collections\nAccess particle properties as arrays\nCreate views over particle subsets\nSplice particles to add/remove them from a model\nRead and write molecular structures in common file formats\nProtein Data Bank (.pdb)\nGromos87 (.gro)\nRead and write molecular trajectories in common file formats\nGromacs uncompressed trajectories (.trr)\nGromacs compressed trajectories (.xtc, read-only)\nAutomatic format detection with support for compressed files\nHierarchical iterators over models\nModel/chain/residue/particle\nModel/fragment/particle\nParticle selection\nProperty-based selectors (name, id, mass, secondary structure, etc.)\nHierarchy-based selectors (complete or partial chain, residue, etc.)\nDistance-based selectors\nLogical selectors\nPredefined convenience selectors (protein, N/C-termini, solvent, etc.)\nGeometry\nDistances, angles, dihedrals, centroids\nTransformations: translation, rotation, scaling\nRMSD and superposition\nLine and plane fitting\nTriclinic periodic boundary conditions\nMinimum particle-particle distance across periodic images\nWrap and unwrap particles into/from the unit cell\nEfficient distance calculations using neighbor lists and cell grids\nAutomated topology assignment\nAutomated secondary structure assignment (using STRIDE)"
},

{
    "location": "intro/#Using-this-documentation-1",
    "page": "Introduction",
    "title": "Using this documentation",
    "category": "section",
    "text": "The documentation for Dorothy is split in three main parts. The first part, Manual, describes all the important features of the package, by topic and in a logical order. These pages form the core of the documentation and are especially recommended for new users. Before diving into the manual, however, it is suggested to go through the short Tutorial that follows this introduction.The second part, Development, discusses the general philosophy behind Dorothy and how to extend the package by implementing new features and writing generic, reusable code. Most users can ignore this.The third part, Reference, covers the public interface of Dorothy and its submodules. The same documentation is available from the REPL using Julia’s help mechanism; ?Dorothy can be used as a starting point to navigate through the submodules and their public variables."
},

{
    "location": "tutorial/#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial/#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "This page will give you a quick overview of the basic usage of Dorothy before you read through the Manual or selected pages thereof. You will learn to read molecular models from files, query and modify particle properties, select subsets of the model, write a subset to a new file, and compute simple geometrical properties from particle positions.We assume Dorothy was already added to your Julia environment (see Installation). We load the necessary modules, then read a molecular model, an MHC-I protein in solvent, from a PBD file distributed with the package.julia> using Dorothy, Formats\n\njulia> model = readf(\"$(Dorothy.datapath)/MHC.pdb\")\n68336-particle 9-key MolecularModel:\n bfactors\n chainids\n elements\n ids\n names\n occupancies\n R\n resids\n resnames"
},

{
    "location": "models/#",
    "page": "Molecular models",
    "title": "Molecular models",
    "category": "page",
    "text": ""
},

{
    "location": "models/#Molecular-models-1",
    "page": "Molecular models",
    "title": "Molecular models",
    "category": "section",
    "text": ""
},

{
    "location": "refs/#",
    "page": "Bibliography",
    "title": "Bibliography",
    "category": "page",
    "text": ""
},

{
    "location": "refs/#Bibliography-1",
    "page": "Bibliography",
    "title": "Bibliography",
    "category": "section",
    "text": ""
},

{
    "location": "refs/#AAFreq-1",
    "page": "Bibliography",
    "title": "AAFreq",
    "category": "section",
    "text": "J. L. King, T. H. Jukes. Non-Darwinian Evolution. Science, 164(3881):788-98, 1969. doi:10.1126/science.164.3881.788"
},

{
    "location": "refs/#ArStd-1",
    "page": "Bibliography",
    "title": "ArStd",
    "category": "section",
    "text": "J. Meija, T. B. Coplen, M. Berglund et al. Atomic weights of the elements 2013 (IUPAC Technical Report). Pure and Applied Chemistry, 88(3):265-91, 2016. doi:10.1515/pac-2015-0305"
},

{
    "location": "refs/#RCov-1",
    "page": "Bibliography",
    "title": "RCov",
    "category": "section",
    "text": "B. Cordero, V. Gómez, A. E. Platero-Prats et al. Covalent radii revisited. Dalton Transactions, (21):2832-8, 2008. doi:10.1039/b801115j"
},

{
    "location": "refs/#SimPW-1",
    "page": "Bibliography",
    "title": "SimPW",
    "category": "section",
    "text": "H. J. C. Berendsen. Simulating the Physical World, Cambridge University Press, 2007. ISBN: 978-0521835275"
},

{
    "location": "license/#",
    "page": "Software license",
    "title": "Software license",
    "category": "page",
    "text": ""
},

{
    "location": "license/#Software-license-1",
    "page": "Software license",
    "title": "Software license",
    "category": "section",
    "text": "You can use the Dorothy.jl package under the terms of the MIT License:Copyright (c) 2019: Olivier Fisette.Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
},

]}
