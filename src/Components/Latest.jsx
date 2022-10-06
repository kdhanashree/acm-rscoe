import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const Latest = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
           <div id='code-div' >
                <div className='concept'>
                    <h1 style={{ padding: 10 }}>Concept of the Week</h1>
                    <h1 style={{ padding: 20 }}><i> Tree Traversals (Inorder, Preorder, Postorder, Levelorder)</i></h1>
                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Inorder Travalsal: </b></h3>  The left subtree is visited first in this traversal method, followed by the root and then the right subtree. Always keep in mind that every node could be a subtree by itself.
                        The output will contain key values sorted in ascending order if a binary search tree is traversed in inorder.<br />
                        <br /><h5><b>Algorithm : </b></h5>
                        Step 1: Traverse the left subtree, i.e., call Inorder(left→subtree)<br />
                        Step 2: Visit the root.<br />
                        Step 3: Traverse the right subtree, i.e., call Inorder(right→subtree)<br />
                        Step 4: End
                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28221%2C221%2C221%2C1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=5px&dsblur=68px&wc=true&wa=true&pv=24px&ph=72px&ln=false&fl=1&fm=Hack&fs=16.5px&lh=125%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%2520%250A%2520%2520%2520%2520vector%253Cint%253E%2520solve%28TreeNode*%2520root%2520%252C%2520vector%253Cint%253E%2520%2526ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F*Inorder-%253E%2520left%2520-%2520root%2520-%2520ans*%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520inorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520solve%28root%252C%2520ans%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%28Height%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>



                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Inorder Morris Traversal : </b></h3> We can navigate the tree without using stack or recursion by using the Morris Traversal. Threaded Binary Tree is the foundation of the Morris Traversal concept. In this traversal, we first create links to Inorder successors and print the data using these links. Then, we go back and undo the changes to bring the tree back to its original state.<br />
                        <br />
                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%250A%2520%2520%2520%2520TreeNode*%2520findPredecessor%28TreeNode*%2520curr%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520TreeNode*%2520temp%2520%253D%2520curr-%253Eleft%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520while%28temp-%253Eright%2520%21%253D%2520NULL%2520%2526%2526%2520temp-%253Eright%2520%21%253D%2520curr%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520temp%2520%253D%2520temp-%253Eright%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520temp%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520inorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Start%2520Traversal%250A%2520%2520%2520%2520%2520%2520%2520%2520TreeNode*%2520curr%2520%253D%2520root%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520while%28curr%2520%21%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%28%21curr-%253Eleft%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28curr-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520curr%2520%253D%2520curr-%253Eright%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520TreeNode*%2520predecessor%2520%253D%2520findPredecessor%28curr%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%28predecessor-%253Eright%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Create%2520link%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520predecessor-%253Eright%2520%253D%2520curr%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520curr%2520%253D%2520curr-%253Eleft%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Destroy%2520link%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520predecessor-%253Eright%2520%253D%2520NULL%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28curr-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520curr%2520%253D%2520curr-%253Eright%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%281%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>



                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Postorder Traversal: </b></h3>  we will now talk about postorder traversal, another method for moving through a tree data structure. One of the traversing methods used to visit a node in the tree is the postorder traversal. It adheres to the LRN principle (Left-right-node). To determine a tree's postfix expression, postorder traversal is used.<br />
                        <br /><h5><b>Algorithm : </b></h5>
                        Step 1: Traverse the left subtree, i.e., call postorder(left→subtree)<br />
                        Step 2: Traverse the right subtree, i.e., call postorder(right→subtree)<br />
                        Step 3: Visit the root.<br />

                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%250A%2520%2520%2520%2520void%2520solve%28TreeNode*%2520root%252Cvector%253Cint%253E%2526%2520ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Base%2520case%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Postrder%2520Traversal%2520%253D%2520LEFT%2520-%2520RIGHT%2520-%2520ROOT%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520postorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%28N%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>


                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Preorder Traversal: </b></h3>  We will now talk about data structure preorder traversal. Stack, array, queue, and other linear data structures only have one way to traverse the data. However, there are numerous ways to navigate through the data in a hierarchical data structure like a tree.
                        In preorder traversal, the root node is visited first, followed by the left subtree and then the right subtree. Preorder traversal is represented by the following:
                        root → left →right<br />
                        <br /><h5><b>Algorithm : </b></h5>
                        Step 1: Visit the root.<br />
                        Step 2: Traverse the left subtree, i.e., call Preorder(left → subtree)<br />
                        Step 3: Traverse the right subtree, i.e., call Inorder(right → subtree)<br />

                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%250A%2520%2520%2520%2520void%2520solve%28TreeNode*%2520root%252Cvector%253Cint%253E%2526%2520ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Base%2520case%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Preorder%2520Traversal%2520%253D%2520ROOT%2520-%2520LEFT%2520-%2520RIGHT%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520preorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%28N%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>

                    <br />
                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Level order traversal: </b></h3>  The algorithm is just like BFS. The algorithm works in this way - Before moving on to the nodes at the next depth level, algorithm begins at the root of the tree and explores every node there. To keep track of the child nodes that were discovered but haven't been fully explored, additional memory, typically a queue, is required.
                        <br />
                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cvector%253Cint%253E%253E%2520levelOrder%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cvector%253Cint%253E%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%2520%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520queue%253CTreeNode%2520*%253E%2520q%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520q.push%28root%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520q.push%28NULL%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520v%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520while%2520%28%21q.empty%28%29%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520TreeNode%2520*temp%2520%253D%2520q.front%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.pop%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28temp%2520%21%253D%2520NULL%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520v.push_back%28temp-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28temp-%253Eleft%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.push%28temp-%253Eleft%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28temp-%253Eright%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.push%28temp-%253Eright%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%25201%2520level%2520has%2520completely%2520traversed%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28v%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520v.clear%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28%21q.empty%28%29%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Queue%2520still%2520has%2520elements%2520in%2520next%2520level%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520q.push%28NULL%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%28N%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>

                </div>
            </div>
        </>
    )
}

export default Latest
