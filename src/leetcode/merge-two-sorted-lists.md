---
title: Merge Two Sorted Lists
---

# Merge Two Sorted Lists

<Badge type="warning" text="LeetCode" /> <Badge type="info" text="#21" /> <Badge type="info" text="Python3" /> <Badge type="info" text="Easy 🟢" /> <Badge type="info" text="Solve by @noeyislearning" />

## Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Example 1:**

![21](https://i.imgur.com/Gqh6WUa.png)

> Input: `list1 = [1,2,4]`, `list2 = [1,3,4]`  
> Output: `[1,1,2,3,4,4]`

**Example 2:**

> Input: `list1 = []`, `list2 = []`  
> Output: `[]`

**Example 3:**

> Input: `list1 = []`, `list2 = [0]`  
> Output: `[0]`

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Solution

```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2
        elif not list2:
            return list1
        elif list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2
```

## Explanation

Imagine you have two necklaces made of number beads. They're already nicely sorted on their strings (smallest to biggest), but they got tangled up together! Your job is to untangle them and make one super-long necklace, still in perfect order.

Your code is like a special necklace sorting machine. Here's how it works:

1. **(Empty Check)** The machine first checks if any necklaces are empty (`if not list1` or `if not list2`). If one is, it just hands you back the other necklace – it's already sorted!

2. **(Smallest Bead Wins)** If both necklaces have beads, it peeks at the first bead of each (`list1.val` vs. `list2.val`). The smaller bead wins and gets attached to the start of the super-necklace.

3. **(Recursive Magic)** Here's the coolest part! The machine is smart. To add the next bead, it calls itself again, giving it the rest of the winning necklace and the whole other necklace. That's like it doing the whole process again with smaller bits of the necklaces!

## More Examples

**Example 1** — Necklace 1 - Beads `[1,2,4]`, Necklace 2 - Beads `[1,3,4]` <Badge type="warning" text="@noeyislearning" />

- **(Step 1)** Both have beads. Machine compares '1' and '1'. It's a tie! (Doesn't matter who wins, the result will be the same)
- **(Step 2)** Machine picks a '1' bead and puts it on the super-necklace.
- **(Step 3)** Now the machine calls itself again!

  - New Necklace 1: [2, 4]
  - New Necklace 2: [1, 3, 4] (the rest of the necklace where the '1' was)

- **(Repeat!)** The machine keeps doing this, comparing the first beads, until one necklace is empty. Then, it just attaches whatever's left of the other one to the end.
