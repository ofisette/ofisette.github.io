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
    "text": "You can use Dorothy under the terms of the MIT License; see LICENSE.md in the project files, or License in the online documentation."
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
    "text": "Dorothy is not a registered package. You can add it to your Julia environment by giving the URL to its repository. The unregistered packages Formats, FormatCodecs and FormatStreams are required as dependencies and can be installed in the same manner.using Pkg\n\nPkg.add(PackageSpec(url=\"https://github.com/ofisette/Formats.jl\"))\nPkg.add(PackageSpec(url=\"https://github.com/ofisette/FormatCodecs.jl\"))\nPkg.add(PackageSpec(url=\"https://github.com/ofisette/FormatStreams.jl\"))\nPkg.add(PackageSpec(url=\"https://github.com/ofisette/Dorothy.jl\"))"
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
    "text": "This page will give you a quick overview of the basic usage of Dorothy before you read through the Manual or selected pages thereof. You will learn to read molecular models from files, query and modify particle properties, select subsets of the model, write a subset to a new file, and compute simple geometrical properties from particle positions."
},

{
    "location": "tutorial/#Reading-molecular-models-1",
    "page": "Tutorial",
    "title": "Reading molecular models",
    "category": "section",
    "text": "We assume Dorothy was already added to your Julia environment (see Installation). We load the necessary modules, then read a molecular model, an MHC-I protein in solvent, from a PBD file distributed with the package.julia> using Dorothy, Formats\n\njulia> model = readf(\"$(Dorothy.datapath)/MHC.pdb\")\n68336-particle 9-key MolecularModel:\n bfactors\n chainids\n elements\n ids\n names\n occupancies\n R\n resids\n resnamesThere is quite a bit going on in these few lines. The Dorothy top-level module provides basic data types, such as MolecularModel. The Formats module provides readf, a generic function to detect and read formatted data. Here, readf delegates reading MHC.pdb to the Dorothy.PDB submodule. The resulting MolecularModel contains 68336 particles (atoms) with 9 properties typical of PDB structures."
},

{
    "location": "tutorial/#Particle-properties-1",
    "page": "Tutorial",
    "title": "Particle properties",
    "category": "section",
    "text": "Particle properties are arrays:julia> model.names\n68336-element Array{String,1}:\n \"MN1\"\n \"MN2\"\n \"N\"  \n \"H1\"\n \"H2\"\n \"H3\"\n \"CA\"\n \"HA1\"\n \"HA2\"\n \"C\"  \n \"O\"  \n ⋮    \n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n \"CL\"\n\njulia> model.resnames[1]\n\"GLY\"\n\njulia> model.elements[1:10]\n10-element Array{String,1}:\n \"\"\n \"\"\n \"N\"\n \"H\"\n \"H\"\n \"H\"\n \"C\"\n \"H\"\n \"H\"\n \"C\"Individual particles can also be queried by indexing the model. Properties become scalar quantities and use the singular form rather the plural.julia> p7 = model[7]\n9-key MolecularModel particle:\n bfactor\n chainid\n element\n id\n name\n occupancy\n R\n resid\n resname\n\njulia> p7.name\n\"CA\"Properties can be set on the model or individual particles.julia> p7.occupancy = 0.0\n0.0\n\njulia> model.resids[1:11] .= 0\n11-element view(::Array{Int64,1}, 1:11) with eltype Int64:\n 0\n 0\n 0\n 0\n 0\n 0\n 0\n 0\n 0\n 0\n 0Particle positions are represented by Vector3D objects from the Geometry submodule. They are fixed-size, immutable, convertible to other AbstractVector types, and have x, y and z fields in addition to array-like indexing.julia> using\njulia> model.R\n68336-element Array{Dorothy.Geometry.Vector3D,1}:\n [88.98, 81.17, 48.96]\n [88.5, 81.43, 48.36]  \n [88.79, 81.31, 48.62]\n [89.09, 80.96, 49.53]\n [88.32, 82.19, 48.74]\n [88.16, 80.64, 48.2]  \n [89.96, 81.48, 47.76]\n [90.72, 82.16, 48.24]\n [90.48, 80.5, 47.58]  \n [89.49, 82.08, 46.44]\n [89.17, 83.26, 46.35]\n ⋮                     \n [46.27, 45.06, 37.91]\n [48.76, 62.74, 3.36]  \n [58.17, 32.9, 6.03]   \n [82.55, 11.78, 63.57]\n [57.78, 8.74, 39.17]  \n [32.68, 17.64, 6.86]  \n [51.55, 60.28, 0.5]   \n [31.73, 14.62, 24.97]\n [113.71, 82.34, 42.32]\n [82.43, 65.82, 68.69]\n [110.61, 81.62, 38.56]\n\njulia> model[1].R\n3-element Dorothy.Geometry.Vector3D:\n 88.98\n 81.17\n 48.96\n\njulia> model[1].R[1]\n88.98\n\njulia> model[1].R.x\n88.98\n\njulia> model[1].R = Vector3D(1.0, 1.0, 1.0)\n3-element Vector3D:\n 1.0\n 1.0\n 1.0\n\njulia> model[1].R = [1.0, 1.0, 1.0]\n3-element Array{Float64,1}:\n 1.0\n 1.0\n 1.0\n\njulia> model[1].R.x = 3.0\nERROR: setfield! immutable struct of type Vector3D cannot be changed\n[...]"
},

{
    "location": "tutorial/#Model-headers-1",
    "page": "Tutorial",
    "title": "Model headers",
    "category": "section",
    "text": "In addition to particle properties, each model has a header that stores global properties, such as the unit cell (for periodic systems), a title, etc. This MolecularModelHeader behaves like a dictionary, but also allows named property access and enforces appropriate types for properties.julia> model.header\n2-entry MolecularModelHeader:\n cell\n title\n\njulia> model.header.title\n\"MHC-I protein, water and ions\"\n\njulia> model.header.title = \"Immunity-related protein in solvent box\"\n\"Immunity-related protein in solvent box\"\n\njulia> model.header.title = 42\nERROR: MethodError: no method matching headerval(::MolecularModelHeader, ::Val{:title}, ::Int64)\n[...]"
},

{
    "location": "tutorial/#Particle-selections-1",
    "page": "Tutorial",
    "title": "Particle selections",
    "category": "section",
    "text": "Selecting a subset of a molecular model to perform calculations on this subset is a very common operation. The Base.view function, which returns a view into a parent array, can also be used with particle collections.julia> prot = view(model, 1:6539)\n6539-particle 9-key MolecularModel view:\n bfactors\n chainids\n elements\n ids\n names\n occupancies\n R\n resids\n resnames\n\njulia> protC = view(prot, 6391:6539)\n149-particle 9-key MolecularModel view:\n bfactors\n chainids\n elements\n ids\n names\n occupancies\n R\n resids\n resnamesHere, we create two views, the first for all protein atoms in the model, the second only for the third polypeptide chain in the model. Typically, however, you do not know in advance the particle indices to target. Instead, you wish to perform selections such as “all protein atoms”, or “all atoms from chain C”. To do this, the view function as it applies to particle collections is extended to accept Selector objects which query particle properties to determine if they should be included in a selection. The Selectors submodule contains predefined selectors.julia> using Dorothy.Selectors\n\njulia> prot == view(model, Protein)\ntrue\n\njulia> protC == view(prot, ChainId(\"C\"))\ntrueAs you can see, the above two views can be created using selections in a much more convenient manner. Selectors can be combined to perform powerful operations on molecular models.julia> selector = Water & Restrict(Within(5.0, of=Protein), by=Residue)\n[...]\n\njulia> length(view(model, selector)) / 3\n1921.0There are 1921 water molecules fully enclosed within 5.0 Å of any protein atom."
},

{
    "location": "tutorial/#Writing-molecular-models-1",
    "page": "Tutorial",
    "title": "Writing molecular models",
    "category": "section",
    "text": "Particle collections (both models and views) can be written to files using writef from the Formats module. Make sure to use a writable location for the output file in the next code example.julia> writef(\"MHC_protC.pdb\", protC)\n12183"
},

{
    "location": "tutorial/#Geometry-calculations-1",
    "page": "Tutorial",
    "title": "Geometry calculations",
    "category": "section",
    "text": ""
},

{
    "location": "module/#",
    "page": "Module organisation",
    "title": "Module organisation",
    "category": "page",
    "text": ""
},

{
    "location": "module/#Module-organisation-1",
    "page": "Module organisation",
    "title": "Module organisation",
    "category": "section",
    "text": "List submodules, suggested external packages, explain @Dorothy macro"
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
    "text": "Particles can be explicit atoms, united-atom groups or coarse-grained beads."
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
    "page": "License",
    "title": "License",
    "category": "page",
    "text": ""
},

{
    "location": "license/#License-1",
    "page": "License",
    "title": "License",
    "category": "section",
    "text": "You can use Dorothy.jl under the terms of the MIT License:Copyright (c) 2019: Olivier Fisette.Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
},

]}
